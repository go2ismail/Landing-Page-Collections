using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace coderush22.Controllers
{
    public class BulkappController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Elements()
        {
            return View();
        }

        public IActionResult Blog()
        {
            return View();
        }

        public IActionResult BlogSingle()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }
    }
}