import React from 'react'
const CommonFooter=()=>{
    return(
        <div>
            <footer className="page-footer font-small blue fixed-bottom bg-white">
                 <div className="footer-copyright text-center py-3">© {(new Date().getFullYear())}&nbsp;Copyright:&nbsp;
                    <a href="HelpUToday.com">HelpUToday.com</a>
                 </div>
            </footer>
        </div>
    )
}
export default CommonFooter;