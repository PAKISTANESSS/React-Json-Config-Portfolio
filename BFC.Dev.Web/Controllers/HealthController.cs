using Microsoft.AspNetCore.Mvc;

namespace BFC.Dev.Web.Controllers
{
    public class HealthController : Controller
    {
        public IActionResult Index()
        {
            return Ok("I'm alive");
        }
    }
}
