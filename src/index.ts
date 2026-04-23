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
/** biome-ignore-all lint/performance/noReExportAll: library */
/** biome-ignore-all assist/source/organizeImports: aesthetic */
/** biome-ignore-all lint/performance/noBarrelFile: library */

// export { forma } from "~/impl/forma";
// export { Problem } from "~/impl/problem";
// export { Success } from "~/impl/success";

// export {
// 	BadGateway,
// 	BadRequest,
// 	Conflict,
// 	ContentTooLarge,
// 	ExpectationFailed,
// 	FailedDependency,
// 	Forbidden,
// 	GatewayTimeout,
// 	Gone,
// 	HttpVersionNotSupported,
// 	ImATeapot,
// 	InsufficientStorage,
// 	InternalServerError,
// 	LengthRequired,
// 	Locked,
// 	LoopDetected,
// 	MethodNotAllowed,
// 	MisdirectedRequest,
// 	NetworkAuthenticationRequired,
// 	NotAcceptable,
// 	NotExtended,
// 	NotFound,
// 	NotImplemented,
// 	PaymentRequired,
// 	PreconditionFailed,
// 	PreconditionRequired,
// 	ProxyAuthenticationRequired,
// 	RangeNotSatisfiable,
// 	RequestHeaderFieldsTooLarge,
// 	RequestTimeout,
// 	ServiceUnavailable,
// 	TooEarly,
// 	TooManyRequests,
// 	Unauthorized,
// 	UnavailableForLegalReasons,
// 	UnprocessableContent,
// 	UnsupportedMediaType,
// 	UpgradeRequired,
// 	UriTooLong,
// 	VariantAlsoNegotiates,
// } from "~/impl/problem-list";
// export { Ok } from "~/impl/success-list";

// export { httpStatus, httpStatusCode, httpStatusName, isStatusError } from "~/impl/util";

// export type { HttpStatus, HttpStatusCode, HttpStatusName } from "~/impl/type";

export * from "~/impl/forma";
export * from "~/impl/problem";
export * from "~/impl/success";

export * from "~/impl/problem-list";
export * from "~/impl/success-list";

export * from "~/impl/util";

export type * from "~/impl/type";
