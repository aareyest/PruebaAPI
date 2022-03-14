using System.Data;
using System.Data.SqlClient;
using PruebaAPI.Models;
using PruebaAPI.Interfaces;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System;

namespace PruebaAPI.Data
{
    public class DataVeterano : IVeterano
    {

        private string connectionString;
        public DataVeterano(IConfiguration configuration)
        {
            connectionString = configuration["ConnectionStrings:cn"];
        }


        public IEnumerable<Veterano> GetVeterano()
        {
            try
            {
                List<Veterano> lstveterano = new List<Veterano>();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("SP_ListarVeterano", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Veterano ve = new Veterano();
                        ve.Idveterano = Convert.ToInt32(rdr["idveterano"]);
                        ve.Dui = rdr["dui"].ToString();
                        ve.Carnet = rdr["carnet"].ToString();
                        ve.Nombre = rdr["nombre"].ToString();
                        ve.Nombre2 = rdr["nombre2"].ToString();
                        ve.Apellido = rdr["apellido"].ToString();
                        ve.Apellido2 = rdr["apellido2"].ToString();
                        lstveterano.Add(ve);
                    }
                    con.Close();
                }
                return lstveterano;
            }
            catch
            {
                throw;
            }
        }

        public int AddVeterano(Veterano veterano)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("SP_AgregarVeterano", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@dui", veterano.Dui);
                    cmd.Parameters.AddWithValue("@carnet", veterano.Carnet);
                    cmd.Parameters.AddWithValue("@nombre", veterano.Nombre);
                    cmd.Parameters.AddWithValue("@nombre2", veterano.Nombre2);
                    cmd.Parameters.AddWithValue("@apellido", veterano.Apellido);
                    cmd.Parameters.AddWithValue("@apellido2", veterano.Apellido2);
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

        public int UpdateVeterano(Veterano veterano)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("SP_EditarVeterano", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idveterano", veterano.Idveterano);
                    cmd.Parameters.AddWithValue("@dui", veterano.Dui);
                    cmd.Parameters.AddWithValue("@carnet", veterano.Carnet);
                    cmd.Parameters.AddWithValue("@nombre", veterano.Nombre);
                    cmd.Parameters.AddWithValue("@nombre2", veterano.Nombre2);
                    cmd.Parameters.AddWithValue("@apellido", veterano.Apellido);
                    cmd.Parameters.AddWithValue("@apellido2", veterano.Apellido2);
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

        public Veterano GetVeteranoData(int idveterano)
        {
            try
            {
                Veterano ve = new Veterano();
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    string sqlQuery = "SELECT * FROM veterano WHERE idveterano= " + idveterano;
                    SqlCommand cmd = new SqlCommand(sqlQuery, con);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        ve.Idveterano = Convert.ToInt32(rdr["idveterano"]);
                        ve.Dui = rdr["dui"].ToString();
                        ve.Carnet = rdr["carnet"].ToString();
                        ve.Nombre = rdr["nombre"].ToString();
                        ve.Nombre2 = rdr["nombre2"].ToString();
                        ve.Apellido = rdr["apellido"].ToString();
                        ve.Apellido2 = rdr["apellido2"].ToString();
                    }
                }
                return ve;
            }
            catch
            {
                throw;
            }
        }

        public int DeleteVeterano(int idveterano)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("SP_EliminarVeterano", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@idveterano", idveterano);
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
