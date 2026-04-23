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
import type { ScreamingSnakeCase } from "~/impl/util";

// biome-ignore-start lint/style/useNamingConvention: map
const HttpStatusMap = {
	// Informational --------------------------------------------
	"Continue": 100,
	"Switching Protocols": 101,
	"Processing": 102,
	"Early Hints": 103,
	// "Unassigned" : 104-199,
	// Successful -----------------------------------------------
	"OK": 200,
	"Created": 201,
	"Accepted": 202,
	"Non-Authoritative Information": 203,
	"No Content": 204,
	"Reset Content": 205,
	"Partial Content": 206,
	"Multi-Status": 207,
	"Already Reported": 208,
	// "Unassigned" : 209-225,
	"IM Used": 226,
	// "Unassigned" : 227-299,
	// Redirection ----------------------------------------------
	"Multiple Choices": 300,
	"Moved Permanently": 301,
	"Found": 302,
	"See Other": 303,
	"Not Modified": 304,
	"Use Proxy": 305,
	// "(Unused)" : 306,
	"Temporary Redirect": 307,
	"Permanent Redirect": 308,
	// "Unassigned" : 309-399,
	// Client Error ---------------------------------------------
	"Bad Request": 400,
	"Unauthorized": 401,
	"Payment Required": 402,
	"Forbidden": 403,
	"Not Found": 404,
	"Method Not Allowed": 405,
	"Not Acceptable": 406,
	"Proxy Authentication Required": 407,
	"Request Timeout": 408,
	"Conflict": 409,
	"Gone": 410,
	"Length Required": 411,
	"Precondition Failed": 412,
	"Content Too Large": 413,
	"URI Too Long": 414,
	"Unsupported Media Type": 415,
	"Range Not Satisfiable": 416,
	"Expectation Failed": 417,
	"I'm a teapot": 418,
	// "Unassigned" : 419-420,
	"Misdirected Request": 421,
	"Unprocessable Content": 422,
	"Locked": 423,
	"Failed Dependency": 424,
	"Too Early": 425,
	"Upgrade Required": 426,
	// "Unassigned" : 427,
	"Precondition Required": 428,
	"Too Many Requests": 429,
	// "Unassigned" : 430,
	"Request Header Fields Too Large": 431,
	// "Unassigned" : 432-450,
	"Unavailable For Legal Reasons": 451,
	// "Unassigned" : 452-499,
	// Server Error ---------------------------------------------
	"Internal Server Error": 500,
	"Not Implemented": 501,
	"Bad Gateway": 502,
	"Service Unavailable": 503,
	"Gateway Timeout": 504,
	"HTTP Version Not Supported": 505,
	"Variant Also Negotiates": 506,
	"Insufficient Storage": 507,
	"Loop Detected": 508,
	// "Unassigned" : 509,
	// Obsolete
	"Not Extended": 510,
	"Network Authentication Required": 511,
	// "Unassigned" : 512-599,
} as const;
// biome-ignore-end lint/style/useNamingConvention: map

type HttpStatusName = keyof typeof HttpStatusMap;
type HttpStatusCode = ScreamingSnakeCase<HttpStatusName>;
type HttpStatus<T extends HttpStatusName = HttpStatusName> = (typeof HttpStatusMap)[T];

type HttpStatusMapInverted = Record<HttpStatus, { name: HttpStatusName; code: HttpStatusCode }>;
const HttpStatusMapInverted: HttpStatusMapInverted = {
	100: { name: "Continue", code: "CONTINUE" },
	101: { name: "Switching Protocols", code: "SWITCHING_PROTOCOLS" },
	102: { name: "Processing", code: "PROCESSING" },
	103: { name: "Early Hints", code: "EARLY_HINTS" },
	// "Unassigned" : 104-199,
	200: { name: "OK", code: "OK" },
	201: { name: "Created", code: "CREATED" },
	202: { name: "Accepted", code: "ACCEPTED" },
	203: { name: "Non-Authoritative Information", code: "NON_AUTHORITATIVE_INFORMATION" },
	204: { name: "No Content", code: "NO_CONTENT" },
	205: { name: "Reset Content", code: "RESET_CONTENT" },
	206: { name: "Partial Content", code: "PARTIAL_CONTENT" },
	207: { name: "Multi-Status", code: "MULTI_STATUS" },
	208: { name: "Already Reported", code: "ALREADY_REPORTED" },
	// "Unassigned" : 209-225,
	226: { name: "IM Used", code: "IM_USED" },
	// "Unassigned" : 227-299,
	300: { name: "Multiple Choices", code: "MULTIPLE_CHOICES" },
	301: { name: "Moved Permanently", code: "MOVED_PERMANENTLY" },
	302: { name: "Found", code: "FOUND" },
	303: { name: "See Other", code: "SEE_OTHER" },
	304: { name: "Not Modified", code: "NOT_MODIFIED" },
	305: { name: "Use Proxy", code: "USE_PROXY" },
	// "(Unused)" : 306,
	307: { name: "Temporary Redirect", code: "TEMPORARY_REDIRECT" },
	308: { name: "Permanent Redirect", code: "PERMANENT_REDIRECT" },
	// "Unassigned" : 309-399,
	400: { name: "Bad Request", code: "BAD_REQUEST" },
	401: { name: "Unauthorized", code: "UNAUTHORIZED" },
	402: { name: "Payment Required", code: "PAYMENT_REQUIRED" },
	403: { name: "Forbidden", code: "FORBIDDEN" },
	404: { name: "Not Found", code: "NOT_FOUND" },
	405: { name: "Method Not Allowed", code: "METHOD_NOT_ALLOWED" },
	406: { name: "Not Acceptable", code: "NOT_ACCEPTABLE" },
	407: { name: "Proxy Authentication Required", code: "PROXY_AUTHENTICATION_REQUIRED" },
	408: { name: "Request Timeout", code: "REQUEST_TIMEOUT" },
	409: { name: "Conflict", code: "CONFLICT" },
	410: { name: "Gone", code: "GONE" },
	411: { name: "Length Required", code: "LENGTH_REQUIRED" },
	412: { name: "Precondition Failed", code: "PRECONDITION_FAILED" },
	413: { name: "Content Too Large", code: "CONTENT_TOO_LARGE" },
	414: { name: "URI Too Long", code: "URI_TOO_LONG" },
	415: { name: "Unsupported Media Type", code: "UNSUPPORTED_MEDIA_TYPE" },
	416: { name: "Range Not Satisfiable", code: "RANGE_NOT_SATISFIABLE" },
	417: { name: "Expectation Failed", code: "EXPECTATION_FAILED" },
	418: { name: "I'm a teapot", code: "IM_A_TEAPOT" },
	// "Unassigned" : 419-420,
	421: { name: "Misdirected Request", code: "MISDIRECTED_REQUEST" },
	422: { name: "Unprocessable Content", code: "UNPROCESSABLE_CONTENT" },
	423: { name: "Locked", code: "LOCKED" },
	424: { name: "Failed Dependency", code: "FAILED_DEPENDENCY" },
	425: { name: "Too Early", code: "TOO_EARLY" },
	426: { name: "Upgrade Required", code: "UPGRADE_REQUIRED" },
	// "Unassigned" : 427,
	428: { name: "Precondition Required", code: "PRECONDITION_REQUIRED" },
	429: { name: "Too Many Requests", code: "TOO_MANY_REQUESTS" },
	// "Unassigned" : 430,
	431: { name: "Request Header Fields Too Large", code: "REQUEST_HEADER_FIELDS_TOO_LARGE" },
	// "Unassigned" : 432-450,
	451: { name: "Unavailable For Legal Reasons", code: "UNAVAILABLE_FOR_LEGAL_REASONS" },
	// "Unassigned" : 452-499,
	500: { name: "Internal Server Error", code: "INTERNAL_SERVER_ERROR" },
	501: { name: "Not Implemented", code: "NOT_IMPLEMENTED" },
	502: { name: "Bad Gateway", code: "BAD_GATEWAY" },
	503: { name: "Service Unavailable", code: "SERVICE_UNAVAILABLE" },
	504: { name: "Gateway Timeout", code: "GATEWAY_TIMEOUT" },
	505: { name: "HTTP Version Not Supported", code: "HTTP_VERSION_NOT_SUPPORTED" },
	506: { name: "Variant Also Negotiates", code: "VARIANT_ALSO_NEGOTIATES" },
	507: { name: "Insufficient Storage", code: "INSUFFICIENT_STORAGE" },
	508: { name: "Loop Detected", code: "LOOP_DETECTED" },
	// "Unassigned" : 509,
	// Obsolete
	510: { name: "Not Extended", code: "NOT_EXTENDED" },
	511: { name: "Network Authentication Required", code: "NETWORK_AUTHENTICATION_REQUIRED" },
	// "Unassigned" : 512-599,
} as const;

interface HttpStatusOptions {
	status: HttpStatus;
	code: HttpStatusCode;
	name: HttpStatusName;
}

interface HttpResponseBody {
	status: HttpStatus;
	code: HttpStatusCode;
	name: HttpStatusName;
}

interface HttpSuccessMeta<T = unknown> {
	[key: string]: T;
}

//// biome-ignore lint/style/useNamingConvention: type generic
// interface HttpSuccessBody<TData = unknown, TMeta = unknown> {
// 	data: TData;
// 	meta: HttpSuccessMeta<TMeta> | undefined;
// }

interface HttpProblemBody {
	type?: string;
	title?: string;
	detail?: string;
	instance?: string;
	cause?: string;

	[extension: string]: unknown;
}

// type HttpResponse = HttpSuccessBody | HttpProblemBody;

export type {
	HttpProblemBody,
	HttpResponseBody,
	HttpStatus,
	HttpStatusCode,
	HttpStatusName,
	HttpStatusOptions,
	// HttpSuccessBody,
	HttpSuccessMeta,
};

export { HttpStatusMap, HttpStatusMapInverted };
