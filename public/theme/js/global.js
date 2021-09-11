/**
 * Created by Shaiful Islam on 14/04/20.
 */
$(document).ready(function ()
{
    /*number format input box*/
    $(document).on("input", ".float_positive", function(event)
    {
        this.value = this.value.replace(/[^0-9.]/g, '').replace('.', 'x').replace(/\./g,'').replace('x','.');
    });
    $(document).on("input", ".integer_positive", function(event)
    {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $(document).on("input", ".float_all", function(event)
    {
        this.value = this.value.replace(/[^0-9.-]/g, '').replace('.', 'x').replace(/\./g,'').replace('x','.').replace(/(?!^)-/g, '');
    });
    $(document).on("input", ".integer_all", function(event)
    {
        this.value = this.value.replace(/[^0-9-]/g, '').replace(/(?!^)-/g, '');
    });
    $(document).on("click",'.select_all',function()
    {
        if($(this).is(':checked'))
        {
            $('.'+$(this).attr('data-type')).prop('checked', true);
        }
        else
        {
            $('.'+$(this).attr('data-type')).prop('checked', false);
        }
    });




});