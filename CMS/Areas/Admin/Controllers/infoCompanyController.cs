using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using CMS.Models;

namespace CMS.Areas.Admin.Controllers
{
    [Authorize]
    public class infoCompanyController : Controller
    {
        private GachMenLongKhanhEntities db = new GachMenLongKhanhEntities();

        // GET: Admin/infoCompany
        public ActionResult Index()
        {
            return View(db.infoCompany.ToList());
        }

        // GET: Admin/infoCompany/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            infoCompany infoCompany = db.infoCompany.Find(id);
            if (infoCompany == null)
            {
                return HttpNotFound();
            }
            return View(infoCompany);
        }

        // GET: Admin/infoCompany/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/infoCompany/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,tenCTy,diaChi,mail,sdt,sdtBan,sdtDD,logo")] infoCompany infoCompany)
        {
            if (ModelState.IsValid)
            {
                db.infoCompany.Add(infoCompany);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(infoCompany);
        }

        // GET: Admin/infoCompany/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            infoCompany infoCompany = db.infoCompany.Find(id);
            if (infoCompany == null)
            {
                return HttpNotFound();
            }
            return View(infoCompany);
        }

        // POST: Admin/infoCompany/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,tenCTy,diaChi,mail,sdt,sdtBan,sdtDD,logo")] infoCompany infoCompany)
        {
            if (ModelState.IsValid)
            {
                db.Entry(infoCompany).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(infoCompany);
        }

        // GET: Admin/infoCompany/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            infoCompany infoCompany = db.infoCompany.Find(id);
            if (infoCompany == null)
            {
                return HttpNotFound();
            }
            return View(infoCompany);
        }

        // POST: Admin/infoCompany/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            infoCompany infoCompany = db.infoCompany.Find(id);
            db.infoCompany.Remove(infoCompany);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
