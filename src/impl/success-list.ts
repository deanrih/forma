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

import type { HttpSuccessMeta } from "~/impl/type";

import { Success } from "~/impl/success";
import { HttpStatusMap } from "~/impl/type";

class OkSuccess<T> extends Success<T> {
	constructor(data: T, meta?: HttpSuccessMeta) {
		super(HttpStatusMap["OK"], data, meta);
	}
}

function Ok<T>(data: T, meta?: HttpSuccessMeta): OkSuccess<T> {
	return new OkSuccess(data, meta);
}

export { Ok };
