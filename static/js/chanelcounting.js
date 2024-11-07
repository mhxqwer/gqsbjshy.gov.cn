$(function() {
$.each($("span[pageCounts=yes]"),function(){
	var countFlag =$(this);
	if(countFlag!=null&&countFlag[0]!="undefined"){//没有使用文章计数功能
		var pageId=countFlag.attr("pageId");
		if(pageId==null||pageId=="undefined"||pageId.match(/^\s*$/)){
		     pageId = $("#eprotalCurrentPageId").val();
		}
		var moduleId = $("#eportalappPortletId").val();
		var url = '/eportal/ui?moduleId='+moduleId+'&pageId='+pageId+'&struts.portlet.action=/app/counting-front!savePageInfo.action';
		$.ajax( {
			type : "post",
			url : url,
			dataType : "text",
			async : false,
			success : function(msg) {
				countFlag.html(msg);
			},
			error : function(msg) {
			}
		});
	}
	});
});

