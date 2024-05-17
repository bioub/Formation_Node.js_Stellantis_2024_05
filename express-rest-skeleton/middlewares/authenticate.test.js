import { expect, test, vitest } from "vitest";
import authenticate from "./authenticate";

test('authenticate returns 401 when token is not valid', () => {
  const req = {
    headers: {}
  };
  const res = {
    json: vitest.fn()
  };
  const next = () => {};
  authenticate(req, res, next);
  expect(res.statusCode).toBe(401);
  expect(res.json).toHaveBeenCalled();
});
