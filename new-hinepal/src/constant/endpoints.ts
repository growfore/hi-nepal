class endPoints {
  public readonly BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
  public readonly API_BASE_URL = this.BACKEND_BASE_URL + "/api";
  public readonly SITE_INFORMATIONS = this.API_BASE_URL + "/site-informations";
  public readonly NAVBAR = this.API_BASE_URL + "/activities/nav-items";
  public readonly CAROUSELS = this.API_BASE_URL + "/carousels";
  public readonly DESTINATIONS = this.API_BASE_URL + "/destinations";
  public readonly PACKAGES = this.API_BASE_URL + "/packages";
  public readonly ACTIVITIES = this.API_BASE_URL + "/activities";
  public readonly REVIEWS = this.API_BASE_URL + "/reviews";
}
export default new endPoints();
