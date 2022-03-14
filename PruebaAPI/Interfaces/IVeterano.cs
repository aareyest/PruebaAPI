using PruebaAPI.Models;
using System.Collections.Generic;

namespace PruebaAPI.Interfaces
{
    public interface IVeterano
    {

        IEnumerable<Veterano> GetVeterano();
        int AddVeterano(Veterano veterano);
        int UpdateVeterano(Veterano veterano);
        Veterano GetVeteranoData(int idveterano);
        int DeleteVeterano(int idveterano);


    }
}
