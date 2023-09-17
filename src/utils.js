const generateFilterElement = (column, value, operator) => {
    let element = {
      type: "element",
      name: operator,
    };
  
    switch (column.TypeAsString) {
      case "User":
      case "UserMulti":
        if (column.SelectionMode === 1) {
          element = {
            type: "element",
            name: "Membership",
            attributes: { Type: "CurrentUserGroups" },
            elements: [
              {
                type: "element",
                name: "FieldRef",
                attributes: { Name: column.InternalName },
              },
            ],
          };
        } else {
          element.elements = [
            {
              type: "element",
              name: "FieldRef",
              attributes: { Name: column.InternalName, LookupId: "True" },
            },
            {
              type: "element",
              name: "Value",
              attributes: { Type: "Integer" },
              elements: [{ type: "element", name: "UserID" }],
            },
          ];
        }
        break;
      default:
        element.elements = [
          {
            type: "element",
            name: "FieldRef",
            attributes: { Name: column.InternalName },
          },
          {
            type: "element",
            name: "Value",
            attributes: { Type: column.TypeAsString },
            elements: [{ type: "text", text: value }],
          },
        ];
    }
  
    return element;
};

const combineFilter = (filters, condition) => {
  if (filters.length === 0) {
    return {
      type: "element",
      name: condition,
    }; // Empty filters, return an empty object
  }

  if (filters.length === 1) {
    // Only one object in the filters, create a top-level object
    const topLevelObj = {
        type: "element",
        name: condition,
      };
    topLevelObj.elements = [filters[0]];
    return topLevelObj;
  }

  if (filters.length <= 2) {
    // Only two objects left, add them as siblings
    const topLevelObj = {
        type: "element",
        name: condition,
      };
    topLevelObj.elements = filters;
    return topLevelObj;
  }

  const [first, ...rest] = filters;
  const topLevelObj = {
    type: "element",
    name: condition,
  };
  topLevelObj.elements = [first];

  // Recursively create the nested structure for the rest of the objects
  const nestedChildren = combineFilter(rest, condition);
  if (nestedChildren) {
    topLevelObj.elements[1] = nestedChildren;
  }

  return topLevelObj;
};

module.exports = {generateFilterElement, combineFilter}