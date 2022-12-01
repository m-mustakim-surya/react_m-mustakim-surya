import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-dark text-white">
        <section className="pt-3">
          <div className="container text-center text-md-start my-3">
            <div className="row mt-3">
              <div className="col-lg-4 mx-auto mb-4">
                <h6 className="font-weight-bold mb-4">ElioScans</h6>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eaque harum cum ea blanditiis ex
                  molestias officiis, libero pariatur enim odit earum vero tempora qui nobis minima, ad sapiente
                  perspiciatis.
                </p>
                <div className="col-3 d-flex justify-content-between">
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-youtube"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                </div>
              </div>
              <div className="col-lg-4 mx-auto mb-4">
                <h6 className="font-weight-bold mb-4">About Us</h6>
                <p className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit atque similique placeat sed
                  nemo vel laboriosam earum labore ea fugiat facilis aperiam fuga, consequuntur id minima, ex, inventore
                  eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod incidunt cupiditate iste
                  voluptatibus numquam suscipit autem inventore facere quas officiis amet eum ratione sint illum atque nam,
                  et magni reiciendis!
                </p>
              </div>
              <div className="col-lg-2 mx-auto mb-4 text-left">
                <h6 className="font-weight-bold mb-4">Come Say Hello!</h6>
                <p className="text-light">4043 N</p>
                <p className="text-light">Ravenswood Ave</p>
                <p className="text-light">Suite 316</p>
                <p className="text-light">Chicago, IL, 60613</p>
                <p><a href="" className="text-primary"> (773) 348-4581</a></p>
              </div>
            </div>
          </div>
        </section>
        <div className="d-flex flex-row justify-content-center">
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Privacy</a></li>
            <li className="list-inline-item"><a href="#">Terms</a></li>
            <li className="list-inline-item"><a href="#">Support</a></li>
          </ul>
          <p className="mb-1 ms-3">&copy;2022 ElioScans</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer