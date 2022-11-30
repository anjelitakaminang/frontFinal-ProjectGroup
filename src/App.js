
import logo from './logo.svg';
import './App.css';
  import 'bootstrap/dist/css/bootstrap.min.css';

  function App() {
    return (
      <body>
      <Masthead />
      <Navigation />
      <About />
{/* Services*/}
<section className="page-section" id="services">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">Services</h2>
      <h3 className="section-subheading text-muted">Created by. Tokyo</h3>
    </div>
    <div className="row text-center">
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary" />
          <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
        </span>
        <h4 className="my-3">E-Commerce</h4>
        <p className="text-muted">Menghadirkan fitur jual beli jasa kebersihan bagi semua masyarakat, dengan harga yang terjangkau untuk semua kalangan.</p>
      </div>
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary" />
          <i className="fas fa-laptop fa-stack-1x fa-inverse" />
        </span>
        <h4 className="my-3">Electronic Services</h4>
        <p className="text-muted">Menyediakan jasa services barang elektronik seperti laptop dan handphone khusus android. Tentu saja dengan harga yang murah bagi semua kalangan.</p>
      </div>
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary" />
          <i className="fas fa-lock fa-stack-1x fa-inverse" />
        </span>
        <h4 className="my-3">Security</h4>
        <p className="text-muted">Customer diberikan jaminan keamanan langsung dari pihak perusahaan. Dan asuransi ganti rugi dua kali lipat jika terjadi kesalahan saat customer memakai jasa kami.</p>
      </div>
    </div>
  </div>
</section>
{/* About*/}
<section className="page-section" id="about">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">About</h2>
      <h3 className="section-subheading text-muted">Phase Of TokyoService-Comunity</h3>
    </div>
    <ul className="timeline">
      <li>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>Agustus 2022</h4>
            <h4 className="subheading">Design</h4>
          </div>
          <div className="timeline-body"><p className="text-muted">Dari awal berdirinya TokyoServices-Comunity, kami telah melakukan berbagai jenis usaha dalam menjadikan TokyoCleaning-Services perusahaan yang terbaik bagi anda. Salah satunya adalah dengan memberikan design website yang menarik mata dan perhatian anda.</p></div>
        </div>
      </li>
      <li className="timeline-inverted">
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>September 2022</h4>
            <h4 className="subheading">Born of TokyoService-Community</h4>
          </div>
          <div className="timeline-body"><p className="text-muted">Pada awal September 2022, kami telah berhasil mendirikan TokyoService-Community. Yang kantor utamanya, berlokasikan di Universitas Klabat, Airmadidi Bawah.</p></div>
        </div>
      </li>
      <li>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>Oktober 2022</h4>
            <h4 className="subheading">Services</h4>
          </div>
          <div className="timeline-body"><p className="text-muted">Kami melihat masalah yang sering dialami saat ini adalah masalah kebersihan rumah dan lingkungan. Terlebih lagi bagi mahasiswa dan para pekerja yang sibuk, sehingga kekurangan waktu untuk membersihkan rumah.</p></div>
        </div>
      </li>
      <li className="timeline-inverted">
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>Desember 2022</h4>
            <h4 className="subheading">TokyoService-Comunity in 2022</h4>
          </div>
          <div className="timeline-body"><p className="text-muted">Saat ini kami telah memiliki beberapa cabang yang sudah tersebar di kota-kota besar seperti Manado, Bitung, Tomohon dan juga cabang diluar pulai yang berada di Jakarta Selatan.</p></div>
        </div>
      </li>
    </ul>
  </div>
</section>
{/* Team*/}
<section className="page-section bg-light" id="team">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
      <h3 className="section-subheading text-muted">Dewan Petinggi TokyoService-Comunity</h3>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src="assets/img/team/anjelita.jpeg" alt="..." />
          <h4>Anjelita Kaminang</h4>
          <p className="text-muted">Chief Executive Officer</p>
          <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/AnjelitaKamina2" aria-label="Anjelita Kaminang Profile"><i className="fab fa-twitter" /></a>
          <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/enji.kaminang/" aria-label="Anjelita Kaminang Facebook Profile"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/anjelita-kaminang-098a2b217/" aria-label="Anjelita Kaminang LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src="assets/img/team/syalom.jpeg" alt="..." />
          <h4>Syalom Wagey</h4>
          <p className="text-muted">Chief Marketing Officer</p>
          <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/s_wagey" aria-label="Syalom Wagey Twitter Profile"><i className="fab fa-twitter" /></a>
          <a className="btn btn-dark btn-social mx-2" href="https://web.facebook.com/G.G.Wagey29" aria-label="Syalom Wagey Twitter Facebook Profile"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/syalom-gabriela-wagey-581288206/" aria-label="Syalom Wagey LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
          <h4>Natalia Katutu</h4>
          <p className="text-muted">Chief Financial Officer</p>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Kami berharap dengan adanya TokyoService-Comunity, bisa menjadi sarana untuk mempermudah masyarakat dalam menjaga kebersihan lingkungan dan rumah mereka.</p></div>
    </div>
  </div>
</section>
{/* Contact*/}
<section className="page-section" id="contact">
  <div className="container">
    <div className="text-center">
      <h2 className="section-heading text-uppercase">Contact Us</h2>
      <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
    </div>
    {/* * * * * * * * * * * * * * * **/}
    {/* * * SB Forms Contact Form * **/}
    {/* * * * * * * * * * * * * * * **/}
    {/* This form is pre-integrated with SB Forms.*/}
    {/* To make this form functional, sign up at*/}
    {/* https://startbootstrap.com/solution/contact-forms*/}
    {/* to get an API token!*/}
    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
      <div className="row align-items-stretch mb-5">
        <div className="col-md-6">
          <div className="form-group">
            {/* Name input*/}
            <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
          </div>
          <div className="form-group">
            {/* Email address input*/}
            <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
          </div>
          <div className="form-group mb-md-0">
            {/* Phone number input*/}
            <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group form-group-textarea mb-md-0">
            {/* Message input*/}
            <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" defaultValue={""} />
            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
          </div>
        </div>
      </div>
      {/* Submit success message*/}
      {/**/}
      {/* This is what your users will see when the form*/}
      {/* has successfully submitted*/}
      <div className="d-none" id="submitSuccessMessage">
        <div className="text-center text-white mb-3">
          <div className="fw-bolder">Form submission successful!</div>
          To activate this form, sign up at
          <br />
          <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
        </div>
      </div>
      {/* Submit error message*/}
      {/**/}
      {/* This is what your users will see when there is*/}
      {/* an error submitting the form*/}
      <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
      {/* Submit Button*/}
      <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
    </form>
  </div>
</section>
{/* Footer*/}
<footer className="footer py-4">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4 text-lg-start">Copyright © Your Website 2022</div>
      <div className="col-lg-4 my-3 my-lg-0">
        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter" /></a>
        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
      </div>
      <div className="col-lg-4 text-lg-end">
        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/scripts.js"></script>
   
    <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
  );
};

export default App;
 
