# Hitting IIS Externally

---

### What

We want to be able to hit our local IIS server from another machine. Here's how

---

### STEP 0

1. Open command prompt
2. Run: `ipconfig`
3. Take note of your IPv4 Address, referred to hereafter as `<YOUR_IP_ADDRESS>`

---

### STEP 1

1. Open Visual Studio, open and run any web project
2. Take note of the port your project is using when your applicaton deploys (the number after the : in the url), referred to hereafter as `<YOUR_PORT>`
3. In the system tray, it should show IIS Express
4. Right click -> Show All Applications
5. Select running site from list (but don't click the link)
6. Open the link next to Config in the lower section
7. Find the `<site>` entry with your project (easiest to search for `<YOUR_PORT>`)
8. It should look something like this:

```
<site name="ProjectName" id="27">
    <application path="/" applicationPool="Clr4IntegratedAppPool">
        <virtualDirectory path="/" physicalPath="C:\Code\Project_Folder\ProjectName" />
    </application>
    <bindings>
        <binding protocol="http" bindingInformation="*:1387:localhost" />
    </bindings>
</site>
```

9. Copy and paste the `<binding>` tag (so there are now two `<binding>` tags inside the `<bindings>` tag), and change the address from 'localhost' to `<YOUR_IP_ADDRESS>`
10. Save and close this file, stop your server, and close Visual Studio

---

### STEP 2 

1. As Administrator, open command prompt (right click cmd, Run as administrator)
2. Run the following: `netsh http add urlacl url=http://<YOUR_IP_ADDRESS>:<YOUR_PORT>/ user=everyone`

---

### STEP 3 

1. Reopen Visual Studio and project
2. Right click WebUI project and select Properties
3. Select Web tab on the left
4. On the right side of that screen, click Create Virtual Directory button
5. Just to be sure (I'm kind of paranoid), close and re-open Visual Studio
6. Run project and try to hit server from both wired and wireless machines to test

---

### TROUBLESHOOTING

* If you get an error trying to run your project that you don't have permissions, either something was missed in step 2 above or always run Visual Studio as administrator (really annoying)
* If you are on an external machine and hit your site and get a 400, bad request default error page, that means the firewall lets you through, but IIS is not responding to that name
* If your IP address changes (it shouldn't for most wired machines, but may for laptops on wifi), then you will have to update <YOUR_IP_ADDRESS> and do this again

---

#### SOURCES

[http://www.codeplussoft.com/Pages/siteonlan][link1]

[http://stackoverflow.com/questions/8188547/running-iis-express-without-administrator-rights][link2]

[link1]: http://www.codeplussoft.com/Pages/siteonlan
[link2]: http://stackoverflow.com/questions/8188547/running-iis-express-without-administrator-rights