using PruebaAPI.Models;
using System.Collections.Generic;

namespace PruebaAPI.Interfaces
{
    public interface IBeneficio
    {

        IEnumerable<Beneficio> GetBeneficio();
        int AddBeneficio(Beneficio beneficio);
        int UpdateBeneficio(Beneficio beneficio);
        Beneficio GetBeneficioData(int idbeneficios);
        int DeleteBeneficio(int idbeneficios);

    }
}
