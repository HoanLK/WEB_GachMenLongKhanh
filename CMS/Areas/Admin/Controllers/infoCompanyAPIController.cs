using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CMS.Models;

namespace CMS.Areas.Admin.Controllers
{
    public class infoCompanyAPIController : ApiController
    {
        private GachMenLongKhanhEntities db = new GachMenLongKhanhEntities();

        // GET: api/infoCompanyAPI
        public IQueryable<infoCompany> GetinfoCompany()
        {
            return db.infoCompany;
        }

        // GET: api/infoCompanyAPI/5
        [ResponseType(typeof(infoCompany))]
        public IHttpActionResult GetinfoCompany(int id)
        {
            infoCompany infoCompany = db.infoCompany.Find(id);
            if (infoCompany == null)
            {
                return NotFound();
            }

            return Ok(infoCompany);
        }

        // PUT: api/infoCompanyAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutinfoCompany(int id, infoCompany infoCompany)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != infoCompany.id)
            {
                return BadRequest();
            }

            db.Entry(infoCompany).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!infoCompanyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/infoCompanyAPI
        [ResponseType(typeof(infoCompany))]
        public IHttpActionResult PostinfoCompany(infoCompany infoCompany)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.infoCompany.Add(infoCompany);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = infoCompany.id }, infoCompany);
        }

        // DELETE: api/infoCompanyAPI/5
        [ResponseType(typeof(infoCompany))]
        public IHttpActionResult DeleteinfoCompany(int id)
        {
            infoCompany infoCompany = db.infoCompany.Find(id);
            if (infoCompany == null)
            {
                return NotFound();
            }

            db.infoCompany.Remove(infoCompany);
            db.SaveChanges();

            return Ok(infoCompany);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool infoCompanyExists(int id)
        {
            return db.infoCompany.Count(e => e.id == id) > 0;
        }
    }
}