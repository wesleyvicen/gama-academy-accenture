let Dash = {
    render : async () => {
        let view = `
        <div class="container p-5">
        <div class="row">
          <div class="col-md-4 text-center d-flex align-items-center">
            <div class="card" style="width: 18rem;">
              <img src="https://1.bp.blogspot.com/-OpEzuBdYmak/XDt9bne9pqI/AAAAAAAAbBc/tEbos8RCNtofucGiLttYiOL-7wLuiu0CgCLcBGAs/s640/POST_MAT%25C3%2589RIA.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 text-center d-flex align-items-center">
            <div class="card" style="width: 18rem;">
              <img src="https://1.bp.blogspot.com/-OpEzuBdYmak/XDt9bne9pqI/AAAAAAAAbBc/tEbos8RCNtofucGiLttYiOL-7wLuiu0CgCLcBGAs/s640/POST_MAT%25C3%2589RIA.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 text-center d-flex align-items-center">
            <div class="card" style="width: 18rem;">
              <img src="https://1.bp.blogspot.com/-OpEzuBdYmak/XDt9bne9pqI/AAAAAAAAbBc/tEbos8RCNtofucGiLttYiOL-7wLuiu0CgCLcBGAs/s640/POST_MAT%25C3%2589RIA.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 text-center d-flex align-items-center p-5">
          <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
    
        <table class="table p-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
    
      </div>
        `

        return view;
    },
    after_render : async () => {}
}

export default Dash;