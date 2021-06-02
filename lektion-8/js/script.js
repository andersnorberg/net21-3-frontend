const show = (id) => {
    console.log(id)
    
    const element = document.getElementById(id)
    console.log(element)
    element.classList.add('show');
}

const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const createDevice = (event) => {
    event.preventDefault();

    if(event.target["deviceid"].value !== "") {
        let json = JSON.stringify({ deviceId: event.target["deviceid"].value })

        fetch('https://na21-afunc.azurewebsites.net/api/devices?code=zIaE8Pms/PEB888HUpI9Wy5r7fM6mEyChOqolZI9P9gdgaSv4aOQpQ==', {
            method: 'post', // Get, Post, Put, Patch, Delete
            headers: {
                "ContentType": "application/json"
            },
            body: json
        }).then(() =>  {
            getDevices();
        })

        
    }
}

const deleteDevice = (id) => {
    fetch('https://na21-afunc.azurewebsites.net/api/devices?code=K/CmI6Cd2CkIyszbpJU7ul3Gc9ztIJnCKtiLsQv/MUfc0LkCBAJoHg==&deviceid=' + id, {
        method: 'delete'
    })
    .catch(error => console.log(error))
    getDevices();
}

const getDevices = () => {
    fetch('https://na21-afunc.azurewebsites.net/api/devices?code=ZXITn5C7NqVh6coDKIsxhBysydderdWdNHYApDrpvTZlqOKpn3Cwpg==')
    .then(res => res.json())
    .then(devices => {
        
        const tbody = document.getElementById('device-list')
        tbody.innerHTML = '';
        
        for (let device of devices) {

            let deviceId = device.deviceId || 'none'
            let connectionState = device.connectionState || 'offline'
            let city = device.properties.desired.location?.city || ''
            let country = device.properties.desired.location?.country || ''
            let type = device.properties.desired.deviceType?.type || 'unknown'
            let typeDesc = device.properties.desired.deviceType?.desc || ''

            tbody.innerHTML += `
            <tr>
                <td><i class="fas fa-microchip"></i></td>
                <td>${deviceId}</td>
                <td>
                    <div>${city}</div>
                    <div class="text-small">${country}</div>    
                </td>
                <td>
                    <div>${city}</div>
                    <div class="text-small">${country}</div>    
                </td>
                <td>
                    <div>${type}</div>
                    <div class="text-small">${typeDesc}</div>    
                </td>

                <td class="status ${(connectionState === "Connected") ? "bg-online" : "bg-offline" }">${(connectionState === "Connected")? "online": "offline" }</td>
                <td class="actions">
                    <a href="#"><i class="fas fa-comment-alt-lines"></i></a>
                    <a href="#"><i class="fas fa-edit"></i></a>
                    <a href="#" onclick="deleteDevice('${deviceId}')"><i class="fas fa-trash"></i></a>
                </td>
            </tr>`;
            
            
        }
    })
}

getDevices()

/* 

                                   <tr>
                                        <td><i class="fas fa-microchip"></i></td>
                                        <td>73259e81-766c-4c19-a4f4-63a6a4ae4ac9</td>
                                        <td>
                                            <div>Vega</div>
                                            <div class="text-small">sweden</div>
                                        </td>
                                        <td>
                                            <div>2021-05-25</div>
                                            <div class="text-small">last updated</div>
                                        </td>
                                        <td>
                                            <div>Weather</div>
                                            <div class="text-small">temperature, humidity</div>
                                        </td>
                                        <td>
                                            <div class="status bg-online">online</div>
                                        </td>
                                        <td class="actions">
                                            <a href="#"><i class="fas fa-comment-alt-lines"></i></a>
                                            <a href="#"><i class="fas fa-edit"></i></a>
                                            <a href="#"><i class="fas fa-trash"></i></a>
                                        </td>
                                    </tr>


*/