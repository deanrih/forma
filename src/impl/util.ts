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
import type { HttpStatus, HttpStatusName } from "~/impl/type";

import { HttpStatusMap, HttpStatusMapInverted } from "~/impl/type";

// https://dev.to/svehla/typescript-transform-case-strings-450b
interface CaseSafeReplace {
	" ": "_";
	"-": "_";
	".": "_";
	",": "_";
	"'": "";
}

type SnakeCase<T extends string> = T extends `${infer F}${infer R}`
	? Lowercase<`${F extends keyof CaseSafeReplace ? CaseSafeReplace[F] : F}${SnakeCase<R>}`>
	: T;

type ScreamingSnakeCase<T extends string> = Uppercase<SnakeCase<T>>;

// TODO (deanrih):httpStatus function but from the code like NOT_FOUND => 404
function httpStatus<T extends HttpStatusName = HttpStatusName>(name: T): HttpStatus<T> {
	return HttpStatusMap[name];
}

function httpStatusCode(status: HttpStatus): (typeof HttpStatusMapInverted)[HttpStatus]["code"] {
	return HttpStatusMapInverted[status]["code"];
}

function httpStatusName(status: HttpStatus): (typeof HttpStatusMapInverted)[HttpStatus]["name"] {
	return HttpStatusMapInverted[status]["name"];
}

function isStatusError(status: HttpStatus): boolean {
	// biome-ignore lint/style/noMagicNumbers: http status
	const result: boolean = status >= 400 && status <= 599;
	return result;
}

export type { CaseSafeReplace, ScreamingSnakeCase, SnakeCase };

export { httpStatus, httpStatusCode, httpStatusName, isStatusError };
