<h1>todo</h1>
<form action="#" onsubmit='return false'>
    <label>
        <input class="newTodo-filed" type="text"/>
        <input type="submit" value="add to list"/>
    </label>
</form>
<div class="todo-content">
    <ul class="todo-list">
        <% _.each(list, function(item){ %>
        <% if(item.status === 'new'){ %>
        <li class="todo-item new" data-id="<%=item._id%>">
            <lable>
                <input type="checkbox"/>
                <span contenteditable="true" class="todo-description"><%= item.description %></span>
            </lable>
                <button type="button" class="delete-btn">X</button>
        </li>
        <% } else { %>
        <li class="todo-item done" data-id="<%=item._id%>">
            <lable>
                <input type="checkbox" checked="checked"/>
                <span class="todo-description" style="text-decoration: line-through;"><%= item.description %></span>
            </lable>
                <button type="button" class="delete-btn">X</button>
        </li>
        <% } %>
        <% }) %>
    </ul>
</div>