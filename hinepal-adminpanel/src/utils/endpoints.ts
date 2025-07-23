const BASE_API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const API_URL = `${BASE_API_URL}/api`;

class Endpoints {
  public readonly API_URL = API_URL;
  public readonly SITE_INFORMATION = `${API_URL}/site-informations`;
  public readonly LOGIN = `${API_URL}/auth/login`;
  public readonly ACTIVITIES = `${API_URL}/activities`;
  public readonly DESTINATIONS = `${API_URL}/destinations`;
  public readonly PACKAGES = `${API_URL}/packages`;
  public readonly CAROUSELS = `${API_URL}/carousels`;
  public readonly REVIEWS = `${API_URL}/reviews`;
  public readonly BLOGS = `${API_URL}/blogs`;
  public readonly UPLOAD = `${API_URL}/upload`;
  public readonly AUTHOR = `${API_URL}/authors`;
}

export default new Endpoints();
