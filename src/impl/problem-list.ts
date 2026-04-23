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
/** biome-ignore-all lint/nursery/noExcessiveClassesPerFile: class definitions */

import type { HttpProblemBody } from "~/impl/type";

import { Problem } from "~/impl/problem";
import { HttpStatusMap } from "~/impl/type";

class BadRequestProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Bad Request"], body);
	}
}

class UnauthorizedProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Unauthorized"], body);
	}
}

class PaymentRequiredProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Payment Required"], body);
	}
}

class ForbiddenProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Forbidden"], body);
	}
}

class NotFoundProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Not Found"], body);
	}
}

class MethodNotAllowedProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Method Not Allowed"], body);
	}
}

class NotAcceptableProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Not Acceptable"], body);
	}
}

class ProxyAuthenticationRequiredProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Proxy Authentication Required"], body);
	}
}

class RequestTimeoutProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Request Timeout"], body);
	}
}

class ConflictProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Conflict"], body);
	}
}

class GoneProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Gone"], body);
	}
}

class LengthRequiredProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Length Required"], body);
	}
}

class PreconditionFailedProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Precondition Failed"], body);
	}
}

class ContentTooLargeProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Content Too Large"], body);
	}
}

class UriTooLongProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["URI Too Long"], body);
	}
}

class UnsupportedMediaTypeProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Unsupported Media Type"], body);
	}
}

class RangeNotSatisfiableProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Range Not Satisfiable"], body);
	}
}

class ExpectationFailedProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Expectation Failed"], body);
	}
}

// biome-ignore lint/style/useNamingConvention: Im A Teapot
class ImATeapotProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["I'm a teapot"], body);
	}
}

class MisdirectedRequestProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Misdirected Request"], body);
	}
}

class UnprocessableContentProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Unprocessable Content"], body);
	}
}

class LockedProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Locked"], body);
	}
}

class FailedDependencyProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Failed Dependency"], body);
	}
}

class TooEarlyProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Too Early"], body);
	}
}

class UpgradeRequiredProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Upgrade Required"], body);
	}
}

class PreconditionRequiredProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Precondition Required"], body);
	}
}

class TooManyRequestsProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Too Many Requests"], body);
	}
}

class RequestHeaderFieldsTooLargeProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Request Header Fields Too Large"], body);
	}
}

class UnavailableForLegalReasonsProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Unavailable For Legal Reasons"], body);
	}
}

class InternalServerErrorProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Internal Server Error"], body);
	}
}

class NotImplementedProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Not Implemented"], body);
	}
}

class BadGatewayProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Bad Gateway"], body);
	}
}

class ServiceUnavailableProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Service Unavailable"], body);
	}
}

class GatewayTimeoutProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Gateway Timeout"], body);
	}
}

class HttpVersionNotSupportedProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["HTTP Version Not Supported"], body);
	}
}

class VariantAlsoNegotiatesProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Variant Also Negotiates"], body);
	}
}

class InsufficientStorageProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Insufficient Storage"], body);
	}
}

class LoopDetectedProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Loop Detected"], body);
	}
}

class NotExtendedProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Not Extended"], body);
	}
}

class NetworkAuthenticationRequiredProblem extends Problem {
	constructor(body: HttpProblemBody = {}) {
		super(HttpStatusMap["Network Authentication Required"], body);
	}
}

function BadRequest(body: HttpProblemBody = {}): BadRequestProblem {
	return new BadRequestProblem(body);
}

function Unauthorized(body: HttpProblemBody = {}): UnauthorizedProblem {
	return new UnauthorizedProblem(body);
}

function PaymentRequired(body: HttpProblemBody = {}): PaymentRequiredProblem {
	return new PaymentRequiredProblem(body);
}

function Forbidden(body: HttpProblemBody = {}): ForbiddenProblem {
	return new ForbiddenProblem(body);
}

function NotFound(body: HttpProblemBody = {}): NotFoundProblem {
	return new NotFoundProblem(body);
}

function MethodNotAllowed(body: HttpProblemBody = {}): MethodNotAllowedProblem {
	return new MethodNotAllowedProblem(body);
}

function NotAcceptable(body: HttpProblemBody = {}): NotAcceptableProblem {
	return new NotAcceptableProblem(body);
}

function ProxyAuthenticationRequired(body: HttpProblemBody = {}): ProxyAuthenticationRequiredProblem {
	return new ProxyAuthenticationRequiredProblem(body);
}

function RequestTimeout(body: HttpProblemBody = {}): RequestTimeoutProblem {
	return new RequestTimeoutProblem(body);
}

function Conflict(body: HttpProblemBody = {}): ConflictProblem {
	return new ConflictProblem(body);
}

function Gone(body: HttpProblemBody = {}): GoneProblem {
	return new GoneProblem(body);
}

function LengthRequired(body: HttpProblemBody = {}): LengthRequiredProblem {
	return new LengthRequiredProblem(body);
}

function PreconditionFailed(body: HttpProblemBody = {}): PreconditionFailedProblem {
	return new PreconditionFailedProblem(body);
}

function ContentTooLarge(body: HttpProblemBody = {}): ContentTooLargeProblem {
	return new ContentTooLargeProblem(body);
}

function UriTooLong(body: HttpProblemBody = {}): UriTooLongProblem {
	return new UriTooLongProblem(body);
}

function UnsupportedMediaType(body: HttpProblemBody = {}): UnsupportedMediaTypeProblem {
	return new UnsupportedMediaTypeProblem(body);
}

function RangeNotSatisfiable(body: HttpProblemBody = {}): RangeNotSatisfiableProblem {
	return new RangeNotSatisfiableProblem(body);
}

function ExpectationFailed(body: HttpProblemBody = {}): ExpectationFailedProblem {
	return new ExpectationFailedProblem(body);
}

// biome-ignore lint/style/useNamingConvention: Im A Teapot
function ImATeapot(body: HttpProblemBody = {}): ImATeapotProblem {
	return new ImATeapotProblem(body);
}

function MisdirectedRequest(body: HttpProblemBody = {}): MisdirectedRequestProblem {
	return new MisdirectedRequestProblem(body);
}

function UnprocessableContent(body: HttpProblemBody = {}): UnprocessableContentProblem {
	return new UnprocessableContentProblem(body);
}

function Locked(body: HttpProblemBody = {}): LockedProblem {
	return new LockedProblem(body);
}

function FailedDependency(body: HttpProblemBody = {}): FailedDependencyProblem {
	return new FailedDependencyProblem(body);
}

function TooEarly(body: HttpProblemBody = {}): TooEarlyProblem {
	return new TooEarlyProblem(body);
}

function UpgradeRequired(body: HttpProblemBody = {}): UpgradeRequiredProblem {
	return new UpgradeRequiredProblem(body);
}

function PreconditionRequired(body: HttpProblemBody = {}): PreconditionRequiredProblem {
	return new PreconditionRequiredProblem(body);
}

function TooManyRequests(body: HttpProblemBody = {}): TooManyRequestsProblem {
	return new TooManyRequestsProblem(body);
}

function RequestHeaderFieldsTooLarge(body: HttpProblemBody = {}): RequestHeaderFieldsTooLargeProblem {
	return new RequestHeaderFieldsTooLargeProblem(body);
}

function UnavailableForLegalReasons(body: HttpProblemBody = {}): UnavailableForLegalReasonsProblem {
	return new UnavailableForLegalReasonsProblem(body);
}

function InternalServerError(body: HttpProblemBody = {}): InternalServerErrorProblem {
	return new InternalServerErrorProblem(body);
}

function NotImplemented(body: HttpProblemBody = {}): NotImplementedProblem {
	return new NotImplementedProblem(body);
}

function BadGateway(body: HttpProblemBody = {}): BadGatewayProblem {
	return new BadGatewayProblem(body);
}

function ServiceUnavailable(body: HttpProblemBody = {}): ServiceUnavailableProblem {
	return new ServiceUnavailableProblem(body);
}

function GatewayTimeout(body: HttpProblemBody = {}): GatewayTimeoutProblem {
	return new GatewayTimeoutProblem(body);
}

function HttpVersionNotSupported(body: HttpProblemBody = {}): HttpVersionNotSupportedProblem {
	return new HttpVersionNotSupportedProblem(body);
}

function VariantAlsoNegotiates(body: HttpProblemBody = {}): VariantAlsoNegotiatesProblem {
	return new VariantAlsoNegotiatesProblem(body);
}

function InsufficientStorage(body: HttpProblemBody = {}): InsufficientStorageProblem {
	return new InsufficientStorageProblem(body);
}

function LoopDetected(body: HttpProblemBody = {}): LoopDetectedProblem {
	return new LoopDetectedProblem(body);
}

function NotExtended(body: HttpProblemBody = {}): NotExtendedProblem {
	return new NotExtendedProblem(body);
}

function NetworkAuthenticationRequired(body: HttpProblemBody = {}): NetworkAuthenticationRequiredProblem {
	return new NetworkAuthenticationRequiredProblem(body);
}

export {
	BadGateway,
	BadRequest,
	Conflict,
	ContentTooLarge,
	ExpectationFailed,
	FailedDependency,
	Forbidden,
	GatewayTimeout,
	Gone,
	HttpVersionNotSupported,
	ImATeapot,
	InsufficientStorage,
	InternalServerError,
	LengthRequired,
	Locked,
	LoopDetected,
	MethodNotAllowed,
	MisdirectedRequest,
	NetworkAuthenticationRequired,
	NotAcceptable,
	NotExtended,
	NotFound,
	NotImplemented,
	PaymentRequired,
	PreconditionFailed,
	PreconditionRequired,
	ProxyAuthenticationRequired,
	RangeNotSatisfiable,
	RequestHeaderFieldsTooLarge,
	RequestTimeout,
	ServiceUnavailable,
	TooEarly,
	TooManyRequests,
	Unauthorized,
	UnavailableForLegalReasons,
	UnprocessableContent,
	UnsupportedMediaType,
	UpgradeRequired,
	UriTooLong,
	VariantAlsoNegotiates,
};
