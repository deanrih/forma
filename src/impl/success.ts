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
import type { HttpStatus, HttpStatusCode, HttpStatusName, HttpSuccessMeta } from "~/impl/type";

import { httpStatusCode, httpStatusName } from "~/impl/util";

class Success<T = unknown> {
	readonly status: HttpStatus;
	readonly code: HttpStatusCode;
	readonly name: HttpStatusName;

	readonly data: T;
	readonly meta?: HttpSuccessMeta;

	constructor(status: HttpStatus, data: T, meta?: HttpSuccessMeta) {
		const code = httpStatusCode(status);
		const name = httpStatusName(status);

		this.status = status;
		this.code = code;
		this.name = name;

		this.data = data;
		this.meta = meta;
	}

	toJson(): Record<string, unknown> {
		return {
			status: this.status,
			code: this.code,
			name: this.name,

			data: this.data,
			meta: this.meta,
		};
	}
}

export { Success };
