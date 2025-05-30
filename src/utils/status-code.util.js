// httpStatusCodes.js

// Successful responses
export const HTTP_OK = 200;                  // OK - Successful request
export const HTTP_CREATED = 201;             // Created - Resource successfully created
export const HTTP_ACCEPTED = 202;            // Accepted - Request accepted but not yet processed
export const HTTP_NO_CONTENT = 204;          // No Content - Request successful but no content to return

// Client error responses
export const HTTP_BAD_REQUEST = 400;        // Bad Request - Invalid request parameters or body
export const HTTP_UNAUTHORIZED = 401;       // Unauthorized - Missing or invalid authentication
export const HTTP_FORBIDDEN = 403;          // Forbidden - User doesn't have permission for the action
export const HTTP_NOT_FOUND = 404;          // Not Found - The resource could not be found
export const HTTP_METHOD_NOT_ALLOWED = 405; // Method Not Allowed - HTTP method not allowed for the resource
export const HTTP_CONFLICT = 409;           // Conflict - Conflict in the request (e.g., resource already exists)
export const HTTP_UNPROCESSABLE_ENTITY = 422; // Unprocessable Entity - Request was well-formed, but unable to process

// Server error responses
export const HTTP_INTERNAL_SERVER_ERROR = 500; // Internal Server Error - A generic server-side error
export const HTTP_NOT_IMPLEMENTED = 501;       // Not Implemented - Server does not support the functionality required
export const HTTP_BAD_GATEWAY = 502;           // Bad Gateway - Invalid response from upstream server
export const HTTP_SERVICE_UNAVAILABLE = 503;   // Service Unavailable - The server is temporarily unavailable
export const HTTP_GATEWAY_TIMEOUT = 504;       // Gateway Timeout - Timeout while waiting for a response from upstream server

// Redirect responses
export const HTTP_MOVED_PERMANENTLY = 301;    // Moved Permanently - Resource has been permanently moved to a new location
export const HTTP_FOUND = 302;                 // Found - Resource temporarily located elsewhere
export const HTTP_NOT_MODIFIED = 304;          // Not Modified - Resource hasn't been modified since last request

// Information responses
export const HTTP_CONTINUE = 100;             // Continue - Client should continue with the request
export const HTTP_SWITCHING_PROTOCOLS = 101;   // Switching Protocols - Server is switching protocols as requested by client