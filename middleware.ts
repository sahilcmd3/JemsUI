import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Redirect to login page if accessing protected routes without authentication
    if (!req.nextauth.token) {
      const protectedRoutes = ["/profile", "/checkout", "/admin", "/wishlist"]
      const isProtectedRoute = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))
      
      if (isProtectedRoute) {
        const loginUrl = new URL("/login", req.url)
        loginUrl.searchParams.set("callbackUrl", req.url)
        return Response.redirect(loginUrl)
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Define public routes that don't require authentication
        const publicRoutes = [
          "/", 
          "/catalog", 
          "/about", 
          "/contact", 
          "/login", 
          "/signup", 
          "/api/auth", 
          "/_next",
          "/collections",
          "/care",
          "/returns",
          "/shipping",
          "/sizing"
        ]
        
        // Define protected routes that require authentication
        const protectedRoutes = [
          "/profile",
          "/checkout",
          "/admin",
          "/wishlist" // Optional: protect cart if you want users to be logged in to add items
        ]
        
        const currentPath = req.nextUrl.pathname
        
        // Check if current path is a public route
        const isPublicRoute = publicRoutes.some(route => currentPath.startsWith(route))
        if (isPublicRoute) return true
        
        // Check if current path is a protected route
        const isProtectedRoute = protectedRoutes.some(route => currentPath.startsWith(route))
        if (isProtectedRoute) {
          // Require authentication for protected routes
          return !!token
        }
        
        // For any other routes, allow access (you can change this behavior if needed)
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (authentication routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
}