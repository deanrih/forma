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

import type { LifeCycleType, StatusMap } from "elysia";
import type { HttpStatus, HttpStatusName } from "~/impl/type";

import {
	Elysia,
	ElysiaCustomStatusResponse,
	InternalServerError as ElysiaInternalServerError,
	InvalidCookieSignature as ElysiaInvalidCookieSignatureError,
	InvalidFileType as ElysiaInvalidFileTypeError,
	NotFoundError as ElysiaNotFoundError,
	ParseError as ElysiaParseError,
	ValidationError as ElysiaValidationError,
} from "elysia";

import { Problem } from "~/impl/problem"; //"~/impl/problem";
// import { Success } from "~/impl/success";
import { httpStatus, isStatusError } from "~/impl/util";

type ElysiaStatus = number | keyof StatusMap;

// interface FormaOptions {
// 	onProblem?: (request: Request, problem: Problem) => void | Promise<void>;
// 	onSuccess?: (request: Request, success: Success) => void | Promise<void>;
// }

function forma(/* options: FormaOptions = {} */): unknown {
	const lifeCycleAs: LifeCycleType = "scoped";
	return new Elysia({
		name: "@deanrih/forma",
	})

		.onError({ as: lifeCycleAs }, ({ error }) => {
			// accept, handle, and forward the error instead of letting it consumed by Elysia
			return error;
		})
		.mapResponse({ as: lifeCycleAs }, async ({ request, responseValue, set }) => {
			await undefined;

			// TODO (deanrih): handle response with error status
			if (responseValue instanceof Response) {
				// const resp = await responseValue.json();
				// handle resp
				// check responseValue.status
				return responseValue;
			}

			let result: Response | undefined;

			const isError = responseValue instanceof Error;

			if (isError && isElysiaError(responseValue)) {
				result = buildProblemResponseElysia(responseValue, request);
			} else if (isError && isProblemError(responseValue)) {
				result = (responseValue as Problem).toResponse(request);
			} else if (isError) {
				const inferredStatus = inferStatus(set.status);
				const status = isStatusError(inferredStatus) ? inferredStatus : httpStatus("Internal Server Error");
				const problem = new Problem(status, {
					title: responseValue.name,
					detail: responseValue.message,
					cause: responseValue.cause as string | undefined,
				});
				result = problem.toResponse(request);
			}

			return result;
		});
}

function inferStatus(status?: ElysiaStatus, defaultValue: HttpStatus = 500): HttpStatus {
	if (status === undefined) {
		return defaultValue;
	}

	let result: HttpStatus;

	if (typeof status === "number") {
		result = status as HttpStatus;
	} else {
		result = httpStatus(status as HttpStatusName);
	}

	if (result === undefined) {
		result = defaultValue;
	}

	return result;
}

function isElysiaError(error: Error): boolean {
	// TODO (deanrih): assert
	const result: boolean =
		error instanceof ElysiaCustomStatusResponse ||
		error instanceof ElysiaInternalServerError ||
		error instanceof ElysiaInvalidCookieSignatureError ||
		error instanceof ElysiaInvalidFileTypeError ||
		error instanceof ElysiaNotFoundError ||
		error instanceof ElysiaParseError ||
		error instanceof ElysiaValidationError;

	return result;
}

function isProblemError(error: Error): boolean {
	// TODO (deanrih): assert
	const result = error instanceof Problem;
	return result;
}

function buildProblemResponseElysia(error: Error, request: Request): Response {
	let status: HttpStatus = httpStatus("Internal Server Error");

	const cause: string | undefined = (error as never)["cause"];
	const title: string | undefined = (error as never)["name"];
	const detail: string | undefined = (error as never)["message"];

	if (error instanceof ElysiaCustomStatusResponse) {
		// console.log(error.response);
	} else {
		status = (error as never)["status"] as HttpStatus;
	}
	// if (error instanceof ElysiaInvalidCookieSignatureError) {
	// 	// console.log(error.key);
	// }
	// if (error instanceof ElysiaInvalidFileTypeError) {
	// 	// console.log(error.expected);
	// 	// console.log(error.property);
	// }
	// if (error instanceof ElysiaValidationError) {
	// 	// most fields
	// }

	const problem = new Problem(status, {
		// type: "#/problem/general-problem",
		title,
		detail,
		cause,
	});
	const result = problem.toResponse(request);
	return result;
}

export { forma };
