export function validationError(request, h, error) {
  console.log(error.message);
  return h.response({ success: false, error: error.message }).code(400).takeover();
}