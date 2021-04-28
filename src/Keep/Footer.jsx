import React from 'react';

const Footer =() =>{
  const year = new Date().getFullYear();
  return (
<>
<footer class="page-footer font-small blue bg-info">
  <div class="footer-copyright text-center py-3">© {year} Copyright:
    <a className='text-light' href="https://uppari.xyz/"> Uppari</a>
  </div>
</footer>
    </>
  );
};
export default Footer;
