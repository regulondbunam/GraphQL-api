---
name: "New Properties Request 🔧"
about: "Request new properties for specific service model"
title: "New Properties Request 🔧"
labels: "enhancement, help wanted"
assignees: ""

---

# TITLE

## Description

Description of the requested property and why is necessary.

## Expected behavior

A clear and concise description of what you expected to obtain as response. 

#### Response Example

<!-- Add an example of expected json response -->



## Additional Info

This section is optional, if you have reviewed the GraphQL schema of the service and want help to find o determine if a property is currently available on the service please indicate the name and the location.

**Properties**

Specify the wanted properties, use the following syntax to define the path of the properties:

e.g. If you want new properties on Gene service an abbreviated name of the products:

    data.gene.products = abbreviatedName(String)

- Where:
    - data.gene.products: is the path where the property must be
    - abbreviatedName(String): is the property name and the type must be
    - If the new property requested is an object of array of objects, this must be indicated with this syntax:

    ```    
    data.gene.products = terms(object array) -> _id(String), name(String)
    ```

**Considerations**
Please keep the following considerations in mind when request for new properties

- Explain the intention to request the property in the specified path and the use (in order to recommend if the property is correctly located).
- Check out the service structure and ensure the property doesn't exists already
- Use the lowerCamelCase for name properties (the first word must be with all lower case, following words must have first letter uppercase), e.g. leftEndPosition
- Mantain the structure of the objects, some objects are intended to contain an specific type of properties (objects that contains objects for example), check the service model to ensure this is not the case.

---

###### Additional context

Add any other context about the query request here.
