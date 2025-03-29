function drawStats(products, proto, num) {
    const stats = {};
    const labels = [];
    const data = [];
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        if (stats[product[proto]]) {
            stats[product[proto]] += 1;
        } else {
            stats[product[proto]] = 1;
        }
    }
    if (Object.keys(stats).length) {
        document.getElementById('stats').innerHTML += `<h4>${proto} statistic: </h4>`
        for (key in stats) {
            document.getElementById('stats').innerHTML += `<h6>${key}: ${stats[key]} </h6>`
            labels.push(key);
            data.push(stats[key]);
        }
    }
    const ctx = document.getElementById(`myChart${num}`);

    if (chart) {
        chart.destroy()
    }
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Votes',
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

function clnStats() {
    document.getElementById('stats').innerHTML = '';
}

function stats() {
    fetch(`https://dummyjson.com/products`).then(data => {
        data.json().then((s) => {
            drawStats(s.products, 'brand', 1)
            drawStats(s.products, 'returnPolicy', 2)
            drawStats(s.products, 'shippingInformation', 3)
        })
    })
}



stats()