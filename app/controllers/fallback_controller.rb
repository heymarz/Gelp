# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::Base

  def index
    respond_to do |format|
      format.html { render body: Rails.root.join('client/public/index.html').read }
    end
  end
end
