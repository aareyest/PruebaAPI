using System.Data;
using System.Data.SqlClient;
using PruebaAPI.Models;
using PruebaAPI.Interfaces;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System;

namespace PruebaAPI.Data
{
    public class DataBeneficio : IBeneficio
    {

        private string connectionString;
        public DataBeneficio(IConfiguration configuration)
        {
            connectionString = configuration["ConnectionStrings:cn"];
        }


        public IEnumerable<Beneficio> GetBeneficio()
        {
            try
            {
                List<Beneficio> lstbeneficio = new List<Beneficio>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("SP_ListarBeneficios", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Beneficio be = new Beneficio();
                        be.Idbeneficios = Convert.ToInt32(rdr["idbeneficios"]);
                        be.Nombre = rdr["nombre"].ToString();
                        be.Descripcion = rdr["descripcion"].ToString();
                        lstbeneficio.Add(be);
                    }
                    con.Close();
                }
                return lstbeneficio;
            }
            catch
            {
                throw;
            }
        }

        public int AddBeneficio(Beneficio beneficio)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("SP_AgregarBeneficios", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@nombre", beneficio.Nombre);
                    cmd.Parameters.AddWithValue("@descripcion", beneficio.Descripcion);
                    
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int UpdateBeneficio(Beneficio beneficio)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("SP_EditarBeneficios", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idbeneficios", beneficio.Idbeneficios);
                    cmd.Parameters.AddWithValue("@nombre", beneficio.Nombre);
                    cmd.Parameters.AddWithValue("@descripcion", beneficio.Descripcion);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public Beneficio GetBeneficioData(int idbeneficios)
        {
            try
            {
                Beneficio be = new Beneficio();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM beneficios WHERE idbeneficios= " + idbeneficios;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        be.Idbeneficios = Convert.ToInt32(rdr["idbeneficios"]);
                        be.Nombre = rdr["nombre"].ToString();
                        be.Descripcion = rdr["descripcion"].ToString();
                       
                    }
                }
                return be;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteBeneficio(int idbeneficios)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("SP_EliminarBeneficios", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idbeneficios", idbeneficios);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
