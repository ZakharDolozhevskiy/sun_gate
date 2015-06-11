<% _.each(list, function(item){ %>
        <% if(item.status === 'new'){ %>
	        <li class="todo-item new">
	            <lable>
	                <input type="checkbox"/>
	                <span contenteditable="true" class="todo-description">
	                    <%= item.description %>
	                </span>
	            </lable>
	            <button type="button" class="delete-btn">X</button>
	        </li>
        <% } else { %>
	        <li class="todo-item done">
	            <lable>
	                <input type="checkbox" checked="checked"/>
	                <span class="todo-description" style="text-decoration: line-through;">
	                    <%= item.description %>
	                </span>
	            </lable>
	            <button type="button" class="delete-btn">X</button>
	        </li>
        <% } %>
<% }) %>



