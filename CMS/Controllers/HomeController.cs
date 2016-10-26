using CMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace CMS.Controllers
{
    public class HomeController : Controller
    {
        private GachMenLongKhanhEntities db = new GachMenLongKhanhEntities();
        [Route]
        public ActionResult Index()
        {
            return View();
        }
    }
}
