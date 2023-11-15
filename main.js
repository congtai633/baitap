const text = document.querySelector(".text");
const nutbam = document.querySelectorAll("button");
const nuttinh = ["%","*","/","-","+","="];
let xuat= "";

const tinh = (giatri) =>
{
    if(giatri === "=" && xuat !=="")
    {
        xuat = eval(xuat.replace("%","/100"));
    }
    else
        if(giatri === "AC")
        {
            xuat = "";
        }
        else
            if(giatri === "DEL")
            {
                xuat = xuat.toString().slice(0, -1);
            }
            else
                {
                    if (xuat === "" && nuttinh.includes(giatri)) return;
                    xuat = xuat + giatri;
                }
    text.value = xuat;
};
nutbam.forEach((button) =>
{
    button.addEventListener("click",(e) => tinh (e.target.dataset.value));
});