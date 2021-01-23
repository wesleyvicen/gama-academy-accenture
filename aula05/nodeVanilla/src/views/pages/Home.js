let Home = {
    render : async() => {
        let view = `
        <div class="container">
        <div class="row">
          <div class="col-md-6 text-center d-flex align-items-center">
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, incidunt architecto facilis officia quidem optio culpa sunt fuga odio, cum fugiat ipsum quasi explicabo ab tempora, iste sit ad repudiandae!</p>
          </div>
          <div class="col-md-6 text-center d-flex align-items-center">
              <img src="img/lorem-ipsum.jpg" class="card-img-top" alt="...">
          </div>
        </div>
    
      </div>
        `

        return view;
    },
    after_render : async () => {}
}

export default Home;