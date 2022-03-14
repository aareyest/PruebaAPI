using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using PruebaAPI.Interfaces;
using PruebaAPI.Data;
using PruebaAPI.Models;
using System.Collections.Generic;

namespace PruebaAPI.Controllers
{

    [Route("api/[controller]")]
    public class VeteranoController : Controller
    {
        private readonly IVeterano objve;

        public VeteranoController(IVeterano _objve)
        {
            objve = _objve;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Veterano> Index()
        {
            return objve.GetVeterano();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Veterano veterano)
        {
            return objve.AddVeterano(veterano);
        }

        [HttpGet]
        [Route("Details/{idveterano}")]
        public Veterano Details(int idveterano)
        {
            return objve.GetVeteranoData(idveterano);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] Veterano veterano)
        {
            return objve.UpdateVeterano(veterano);
        }

        [HttpDelete]
        [Route("Delete/{idveterano}")]
        public int Delete(int idveterano)
        {
            return objve.DeleteVeterano(idveterano);
        }

    }

}
