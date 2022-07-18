using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MSA.Phase2.AmazingApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RedditController : ControllerBase
    {
        private readonly HttpClient _client;


        /// <summary />
        public RedditController(IHttpClientFactory clientFactory)
        {
            if (clientFactory is null)
            {
                throw new ArgumentNullException(nameof(clientFactory));
            }

            _client = clientFactory.CreateClient("reddit");
        }

        /// <summary>
        /// Gets the raw JSON for the hot feed in reddit
        /// </summary>
        /// <returns>A JSON object representing the hot feed in reddit</returns>
        [HttpGet]
        [Route("raw")]
        [ProducesResponseType(200)]
        public async Task<IActionResult> GetRawRedditHotPosts()
        {
            var res = await _client.GetAsync("/hot");
            var content = await res.Content.ReadAsStringAsync();

            return Ok(content);
        }
    }
}
