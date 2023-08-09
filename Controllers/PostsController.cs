using Microsoft.AspNetCore.Mvc;
using PracticeAngular.DTO;

namespace PracticeAngular.Controllers;

[ApiController]
[Route("[controller]")]
public class PostsController : Controller
{
    private readonly ILogger<PostsController> _logger;
    
    public PostsController(ILogger<PostsController> logger)
    {
        _logger = logger;
    }
    
    /*
    // GET
    public IActionResult Index()
    {
        return View();
    }
    */

    [HttpGet]
    public IEnumerable<PostReadModel> Search()
    {
        return new PostReadModel[]
        {
            new(1, "A test post", "", DateTime.Now),
            new(2, "A test post", "", DateTime.Now),
            new(3, "A test post", "", DateTime.Now),
            new(4, "A test post", "", DateTime.Now),
            new(5, "A test post", "", DateTime.Now),
            new(6, "A test post", "", DateTime.Now),
        };
    }
}
