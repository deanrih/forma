/**
 * @file
 * Copyright (c) 2026 Dean Rikrik Ichsan Hakiki.
 * All rights reserved.
 *
 * This code is licensed under the MIT License.
 *
 * @license     MIT
 * @description Elysia middleware to handle errors and responses and transform them to follow standard.
 * @author      Dean Rikrik Ichsan Hakiki (deanrih)
 * @version     1.0.0-alpha.1
 * @copyright   Dean Rikrik Ichsan Hakiki 2026
 */

import type { HttpProblemBody, HttpStatus, HttpStatusCode, HttpStatusName } from "~/impl/type";

import { httpStatusCode, httpStatusName } from "~/impl/util";

const DEFAULT_PROBLEM_TYPE = "#/problem";

class Problem extends Error {
	readonly status: HttpStatus;
	readonly code: HttpStatusCode;
	override readonly name: HttpStatusName;

	readonly type?: string;
	readonly title?: string;
	readonly detail?: string;
	readonly instance?: string;
	override readonly cause?: string;

	readonly extensions: Record<string, unknown>;

	constructor(status: HttpStatus, body: HttpProblemBody = {}) {
		const code = httpStatusCode(status);
		const name = httpStatusName(status);
		const finalTitle = body.title ?? name;

		super(body.detail ?? finalTitle, { cause: body.cause });

		this.status = status;
		this.code = code;
		this.name = name;

		const { type, title: _, detail, instance, cause, ...rest } = body;

		// TODO (deanrih): slugify finalTitle next, for now just set general-problem
		// this.type = type ?? `${DEFAULT_PROBLEM_TYPE}/${finalTitle}`;
		this.type = type ?? `${DEFAULT_PROBLEM_TYPE}/general-problem`;
		this.title = finalTitle;
		this.detail = detail;
		this.instance = instance;
		this.cause = cause;

		this.extensions = rest;
	}

	toJson(instance?: string | Request): Record<string, unknown> {
		let finalInstance = this.instance;

		if (instance !== undefined) {
			finalInstance = instance instanceof Request ? new URL(instance.url).pathname : instance;
		}

		return {
			status: this.status,
			code: this.code,
			name: this.name,

			type: this.type,
			title: this.title,
			detail: this.detail ?? this.code,
			instance: finalInstance,
			cause: this.cause,

			...this.extensions,
		};
	}

	toResponse(instance?: string | Request): Response {
		return new Response(JSON.stringify(this.toJson(instance)), {
			status: this.status,
			statusText: this.code,
			headers: {
				"Content-Type": "application/problem+json",
			},
		});
	}
}

export { Problem };
