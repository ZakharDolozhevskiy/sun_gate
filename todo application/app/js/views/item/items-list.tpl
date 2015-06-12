<% if(!item.done){ %>
    <label>
        <input type="checkbox"/>
    </label>
        <span contenteditable="true" class="todo-description"><%= item.description %></span>
        <button type="button" class="delete-btn">X</button>
<% } else { %>
    <label>
        <input type="checkbox" checked="checked"/>
    </label>
        <span class="todo-description complete-item"><%= item.description %></span>
        <button type="button" class="delete-btn">X</button>
<% } %>



