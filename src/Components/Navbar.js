function Navbar(){
    return(
        <div>
            <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">eCommerce</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Products</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Add a product</a>
  </li>
  <li class="nav-item justify-content-end">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">John Doe</a>
  </li>
</ul>
        </div>
    )
}

export default Navbar;