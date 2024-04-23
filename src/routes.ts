/**
 * Herkese açık routelar
 * Bunlar login gerektirmez
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification",
  ];
  
  /**
   * Bu sayfalara erişim sağlamaya çalışan giriş yapmış 
   * Kullanıcılar /settings sayfasına yönlendirilir
   * @type {string[]}
   */
  export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
  ];
  
  /**
   * Bu routelar api tarafından kullanılır
   * Erişim engeli konulmamalı
   * @type {string}
   */
  export const apiAuthPrefix = "/api/auth";
  
  /**
   * Oturum açtıktan sonra varsayılan yönlendirme yolu
   * @type {string}
   */
  export const DEFAULT_LOGIN_REDIRECT = "/settings";


  /**
   * Admin only pages
   * @type {string}
   */
  export const AdminRoutes = "/admin";