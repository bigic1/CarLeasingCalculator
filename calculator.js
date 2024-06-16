export class Calculator
{
    constructor(host)
    {
        this.host = host;
        this.cars = [];
    }
    draw()
    {
        const div1 = document.createElement("div");
        div1.className = "div1";
        this.host.appendChild(div1);

        const topdiv = document.createElement("div");
        div1.appendChild(topdiv);

        const title = document.createElement("h1");
        title.textContent = "Car Leasing Calculator";
        topdiv.appendChild(title);

        const middiv = document.createElement("div");
        middiv.className = "middiv";
        div1.appendChild(middiv);

        const cleft = document.createElement("div");
        cleft.className = "cleft";
        const cright = document.createElement("div");
        cright.className = "cright";
        middiv.appendChild(cleft);
        middiv.appendChild(cright);

        const typelbl = document.createElement("p");
        typelbl.textContent = "Car Type:";
        cleft.appendChild(typelbl);

        const typebox = document.createElement("select");
        cleft.appendChild(typebox);

        this.cars.forEach(car => {
            const opt1 = document.createElement("option");
            opt1.value = car.interest;
            opt1.innerText = car.type;
            typebox.add(opt1);
        });

        typebox.onchange=()=>{
            updatevalues();
        }

        const valuelbl = document.createElement("p");
        valuelbl.textContent = "Car Value (€10,000 - €200,000):";
        cleft.appendChild(valuelbl);

        const valuebox = document.createElement("input");
        cleft.appendChild(valuebox);

        valuebox.onchange=()=>{
            valuerange.value = valuebox.value;
            updatevalues();
        }

        const valuerange = document.createElement("input");
        valuerange.type = "range";
        valuerange.min = 10000;
        valuerange.max = 200000;
        cleft.appendChild(valuerange);

        valuerange.onchange=()=>{
            valuebox.value = valuerange.value;
            updatevalues();
        }

        const leaselbl = document.createElement("p");
        leaselbl.textContent = "Lease Period (months):";
        cright.appendChild(leaselbl);

        const leasebox = document.createElement("input");
        cright.appendChild(leasebox);

        leasebox.onchange=()=>{
            leaserange.value = leasebox.value;
            updatevalues();
        }

        const leaserange = document.createElement("input");
        leaserange.type = "range";
        leaserange.min = 12;
        leaserange.max = 60;
        leaserange.step = 12;
        cright.appendChild(leaserange);

        leaserange.onchange=()=>{
            leasebox.value = leaserange.value;
            updatevalues();
        }

        const downlbl = document.createElement("p");
        downlbl.textContent = "Down Payment (10-50%):";
        cright.appendChild(downlbl);

        const downrange = document.createElement("input");
        downrange.type = "range";
        downrange.min = 10;
        downrange.max = 50;
        downrange.step = 5;
        cright.appendChild(downrange);

        downrange.onchange=()=>{
            updatevalues();
        }

        const bottomdiv = document.createElement("div");
        div1.appendChild(bottomdiv);

        const detailslbl = document.createElement("h2");
        detailslbl.textContent = "Leasing Details";
        bottomdiv.appendChild(detailslbl);

        const bottom2 = document.createElement("div");
        bottom2.className = "bottom2";
        bottomdiv.appendChild(bottom2);
        
        const bottomleft = document.createElement("div");
        const bottomright = document.createElement("div");
        bottomleft.className = "bottomleft";
        bottomleft.className = "bottomright";
        bottom2.appendChild(bottomleft);
        bottom2.appendChild(bottomright);

        const bleftlbl = document.createElement("p");
        bleftlbl.textContent = "Total Leasing Cost: €";
        bottomleft.appendChild(bleftlbl);

        const bleftlbl2 = document.createElement("p");
        bleftlbl2.textContent = "Down Payment: €" + (valuebox.value * downrange.value / 100) + " (" + downrange.value + "%)";
        bottomleft.appendChild(bleftlbl2);



        const brightlbl = document.createElement("p");
        brightlbl.textContent = "Monthly Installment: €";
        bottomright.appendChild(brightlbl);

        const brightlbl2 = document.createElement("p");
        brightlbl2.className = "brightlbl2";
        brightlbl2.textContent = "Interest Rate: " + typebox.value + "%";
        bottomright.appendChild(brightlbl2);


        
        function updatevalues()
        {
            bleftlbl2.textContent = "Down Payment: €" + (valuebox.value * downrange.value / 100) + " (" + downrange.value + "%)";
            brightlbl2.textContent = "Interest Rate: " + typebox.value;
        }

    }

    add(car)
    {
        this.cars.push(car);
    }
}