using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using PruebaAPI.Interfaces;
using PruebaAPI.Data;
using PruebaAPI.Models;
using System.Collections.Generic;

namespace PruebaAPI.Controllers
{
    [Route("api/[controller]")]
    public class BeneficioController : Controller
    {
        private readonly IBeneficio objbe;

        public BeneficioController(IBeneficio _objbe)
        {
            objbe = _objbe;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Beneficio> Index()
        {
            return objbe.GetBeneficio();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Beneficio beneficio)
        {
            return objbe.AddBeneficio(beneficio);
        }

        [HttpGet]
        [Route("Details/{idbeneficios}")]
        public Beneficio Details(int idbeneficios)
        {
            return objbe.GetBeneficioData(idbeneficios);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] Beneficio beneficio)
        {
            return objbe.UpdateBeneficio(beneficio);
        }

        [HttpDelete]
        [Route("Delete/{idbeneficios}")]
        public int Delete(int idbeneficios)
        {
            return objbe.DeleteBeneficio(idbeneficios);
        }
    }
}
