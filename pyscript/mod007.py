element = js.document.createElement('h1')
element.innerText = "Hello"
js.document.getElementById("output").append(element)

table = js.document.createElement('table')
for i in range(5):
    tr = js.document.createElement('tr')
    for j in range(4):
        td = js.document.createElement('td')
        td.innerText = f'hello {i} {j}'
        tr.append(td)
    table.append(tr)
output = Element('output')
output.element.append(table)
