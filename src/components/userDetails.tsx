import { userDetails } from "../types/user"

export const UserDetail = ({ user }: { user: userDetails | undefined }) => {
  return (
    <div className="container  h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-6 mb-4 mb-lg-0">
          <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
            <div className="row g-0">
              <div className="col-md-4 gradient-custom text-center"
                style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                <img src={user?.avatar_url}
                  alt="Avatar" className="img-fluid my-5" style={{ width: "80px" }} />
                <div>
                  <h5>{user?.login}</h5>
                  <p>{user?.bio}</p>
                  <a href={user?.bio}>Visit github profile!</a>
                  <i className="far fa-edit mb-5"></i>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">

                  <h6>Information</h6>
                  {/* <hr className="mt-0 mb-4"> */}
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Public Repo</h6>
                      <p className="text-muted">{user?.public_repos}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>CreatedAt</h6>
                      <p className="text-muted">{user?.created_at}</p>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}