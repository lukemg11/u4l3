async function getData()
{

        let response = await fetch("ZonAnn.Ts+dSST.csv");
        let data = await response.text();
        const rows = data.split("\n").slice(1);
        rows.forEach((elem) => {
          const row = elem.split(",");
          const year = row[0];
          const temp = row[1];
          console.log(year, temp);
        });
}
const ctx=document.getElementById("lukeChart");
new Chart(ctx,{
    type: 'line',
    data: {
   
        labels: secondIn.map((p)=>p),
        datasets: [
            {
                label: "Increasing temperature by year",
                data: firstIn.map((p)=>p),
                backgroundColor: '#33FFA4',
                size: 20,
            }
        ],
     
    }
})
getData();
