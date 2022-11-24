// JavaScript source code
@section scripts{
<script type="text/javascript">
$(function()
{
        $.getJSON('/api/contact', function(contactsJsonPayload)
        {
            $(contactsJsonPayload).each(function(i, item)
            {
                $('#contacts').append('<li>' + item.Name + '</li>');
            });
        });
});
</script>
}