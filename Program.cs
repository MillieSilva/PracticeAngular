using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddSwaggerGen(
    c => c.AddServer(new OpenApiServer
    {
        // TODO: Url should be fetched from launchSettings.json instead of repeated here
        Description = "Development Server", Url = "https://localhost:7070/" 
    })
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

// app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

// TODO: Likely temporary
// app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin())

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");;

app.UseSwagger().UseSwaggerUI();

app.Run();
