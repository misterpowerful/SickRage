$(document).ready(function(){
    var loading = '<img src="' + sbRoot + '/images/loading16' + themeSpinner + '.gif" height="16" width="16" />';

    $('#testGrowl').click(function () {
        var growl_host = $.trim($('#growl_host').val());
        var growl_password = $.trim($('#growl_password').val());
        if (!growl_host) {
            $('#testGrowl-result').html('Please fill out the necessary fields above.');
			$('#growl_host').addClass('warning');
            return;
        }
        $('#growl_host').removeClass('warning');
		$(this).prop('disabled', true);
        $('#testGrowl-result').html(loading);
        $.get(sbRoot + '/home/testGrowl', {'host': growl_host, 'password': growl_password})
            .done(function (data) {
                $('#testGrowl-result').html(data);
                $('#testGrowl').prop('disabled', false);
            });
    });

    $('#testProwl').click(function () {
        var prowl_api = $.trim($('#prowl_api').val());
        var prowl_priority = $('#prowl_priority').val();
        if (!prowl_api) {
            $('#testProwl-result').html('Please fill out the necessary fields above.');
			$('#prowl_api').addClass('warning');
            return;
        }
        $('#prowl_api').removeClass('warning');
		$(this).prop('disabled', true);
        $('#testProwl-result').html(loading);
        $.get(sbRoot + '/home/testProwl', {'prowl_api': prowl_api, 'prowl_priority': prowl_priority})
            .done(function (data) {
                $('#testProwl-result').html(data);
                $('#testProwl').prop('disabled', false);
            });
    });
	
    $('#testXBMC').click(function () {
        var xbmc_host = $.trim($('#xbmc_host').val());
        var xbmc_username = $.trim($('#xbmc_username').val());
        var xbmc_password = $.trim($('#xbmc_password').val());
        if (!xbmc_host) {
            $('#testXBMC-result').html('Please fill out the necessary fields above.');
			$('#xbmc_host').addClass('warning');
            return;
        }
        $('#xbmc_host').removeClass('warning');
		$(this).prop('disabled', true);
        $('#testXBMC-result').html(loading);
        $.get(sbRoot + '/home/testXBMC', {'host': xbmc_host, 'username': xbmc_username, 'password': xbmc_password})
            .done(function (data) {
                $('#testXBMC-result').html(data);
                $('#testXBMC').prop('disabled', false);
            });
    });

    $('#testPLEX').click(function () {
        var plex_host = $.trim($('#plex_host').val());
        var plex_username = $.trim($('#plex_username').val());
        var plex_password = $.trim($('#plex_password').val());
        if (!plex_host) {
            $('#testPLEX-result').html('Please fill out the necessary fields above.');
			$('#plex_host').addClass('warning');
            return;
        }
        $('#plex_host').removeClass('warning');
		$(this).prop('disabled', true);
        $('#testPLEX-result').html(loading);
        $.get(sbRoot + '/home/testPLEX', {'host': plex_host, 'username': plex_username, 'password': plex_password})
            .done(function (data) {
                $('#testPLEX-result').html(data);
                $('#testPLEX').prop('disabled', false);
            });
    });

    $('#testBoxcar').click(function() {
		var boxcar_username = $.trim($('#boxcar_username').val());
		if (!boxcar_username) {
            $('#testBoxcar-result').html('Please fill out the necessary fields above.');
			$('#boxcar_username').addClass('warning');
            return;
        }
		$('#boxcar_username').removeClass('warning');
		$(this).prop('disabled', true);
        $('#testBoxcar-result').html(loading);
        $.get(sbRoot + '/home/testBoxcar', {'username': boxcar_username})
            .done(function (data) {
                $('#testBoxcar-result').html(data);
                $('#testBoxcar').prop('disabled', false);
            });
    });
	
    $('#testBoxcar2').click(function () {
        var boxcar2_accesstoken = $.trim($('#boxcar2_accesstoken').val());
        if (!boxcar2_accesstoken) {
            $('#testBoxcar2-result').html('Please fill out the necessary fields above.');
			$('#boxcar2_accesstoken').addClass('warning');
            return;
        }
        $('#boxcar2_accesstoken').removeClass('warning');
		$(this).prop('disabled', true);
        $('#testBoxcar2-result').html(loading);
        $.get(sbRoot + '/home/testBoxcar2', {'accessToken': boxcar2_accesstoken})
            .done(function (data) {
                $('#testBoxcar2-result').html(data);
                $('#testBoxcar2').prop('disabled', false);
            });
    });

    $('#testPushover').click(function () {
        var pushover_userkey = $('#pushover_userkey').val();
        var pushover_apikey = $('#pushover_apikey').val();
        if (!pushover_userkey || !pushover_apikey) {
            $('#testPushover-result').html('Please fill out the necessary fields above.');
			if (!pushover_userkey) {
				$('#pushover_userkey').addClass('warning');
			} else {
				$('#pushover_userkey').removeClass('warning');
			}
			if (!pushover_apikey) {
				$('#pushover_apikey').addClass('warning');
			} else {
				$('#pushover_apikey').removeClass('warning');
			}
            return;
        }
		$('#pushover_userkey,#pushover_apikey').removeClass('warning');
		$(this).prop('disabled', true);
        $('#testPushover-result').html(loading);
        $.get(sbRoot + '/home/testPushover', {'userKey': pushover_userkey, 'apiKey': pushover_apikey})
            .done(function (data) {
                $('#testPushover-result').html(data);
                $('#testPushover').prop('disabled', false);
            });
    });

    $('#testLibnotify').click(function() {
        $('#testLibnotify-result').html(loading);
        $.get(sbRoot + '/home/testLibnotify',
            function (data) { $('#testLibnotify-result').html(data); });
    });
  
    $('#twitterStep1').click(function() {
        $('#testTwitter-result').html(loading);
        $.get(sbRoot + '/home/twitterStep1', function (data) {window.open(data); })
            .done(function () { $('#testTwitter-result').html('<b>Step1:</b> Confirm Authorization'); });
    });

    $('#twitterStep2').click(function () {
        var twitter_key = $.trim($('#twitter_key').val());
        if (!twitter_key) {
            $('#testTwitter-result').html('Please fill out the necessary fields above.');
			$('#twitter_key').addClass('warning');
            return;
        }
		$('#twitter_key').removeClass('warning');
        $('#testTwitter-result').html(loading);
        $.get(sbRoot + '/home/twitterStep2', {'key': twitter_key},
            function (data) { $('#testTwitter-result').html(data); });
    });

    $('#testTwitter').click(function() {
        $.get(sbRoot + '/home/testTwitter',
            function (data) { $('#testTwitter-result').html(data); });
    });

    $('#settingsNMJ').click(function() {
        if (!$('#nmj_host').val()) {
            alert('Please fill in the Popcorn IP address');
            $('#nmj_host').focus();
            return;
        }
        $('#testNMJ-result').html(loading);
        var nmj_host = $('#nmj_host').val();
        
        $.get(sbRoot + '/home/settingsNMJ', {'host': nmj_host},
            function (data) {
                if (data === null) {
                    $('#nmj_database').removeAttr('readonly');
                    $('#nmj_mount').removeAttr('readonly');
                }
                var JSONData = $.parseJSON(data);
                $('#testNMJ-result').html(JSONData.message);
                $('#nmj_database').val(JSONData.database);
                $('#nmj_mount').val(JSONData.mount);

                if (JSONData.database) {
                    $('#nmj_database').attr('readonly', true);
                } else {
                    $('#nmj_database').removeAttr('readonly');
                }
                if (JSONData.mount) {
                    $('#nmj_mount').attr('readonly', true);
                } else {
                    $('#nmj_mount').removeAttr('readonly');
                }
            });
    });

    $('#testNMJ').click(function () {
        var nmj_host = $.trim($('#nmj_host').val());
        var nmj_database = $('#nmj_database').val();
        var nmj_mount = $('#nmj_mount').val();
        if (!nmj_host) {
            $('#testNMJ-result').html('Please fill out the necessary fields above.');
			$('#nmj_host').addClass('warning');
            return;
        }
        $('#nmj_host').removeClass('warning');
		$(this).prop('disabled', true);
        $('#testNMJ-result').html(loading);
        $.get(sbRoot + '/home/testNMJ', {'host': nmj_host, 'database': nmj_database, 'mount': nmj_mount})
            .done(function (data) {
                $('#testNMJ-result').html(data);
                $('#testNMJ').prop('disabled', false);
            });
    });

	$('#settingsNMJv2').click(function() {
        if (!$('#nmjv2_host').val()) {
            alert('Please fill in the Popcorn IP address');
            $('#nmjv2_host').focus();
            return;
        }
        $('#testNMJv2-result').html(loading);
        var nmjv2_host = $('#nmjv2_host').val();
		var nmjv2_dbloc;
		var radios = document.getElementsByName('nmjv2_dbloc');
		for (var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				nmjv2_dbloc=radios[i].value;
				break;
			}
		}

        var nmjv2_dbinstance=$('#NMJv2db_instance').val();
        $.get(sbRoot + '/home/settingsNMJv2', {'host': nmjv2_host,'dbloc': nmjv2_dbloc,'instance': nmjv2_dbinstance}, 
        function (data){
            if (data == null) {
                $('#nmjv2_database').removeAttr('readonly');
            }
            var JSONData = $.parseJSON(data);
            $('#testNMJv2-result').html(JSONData.message);
            $('#nmjv2_database').val(JSONData.database);
            
            if (JSONData.database)
                $('#nmjv2_database').attr('readonly', true);
            else
                $('#nmjv2_database').removeAttr('readonly');
        });
    });

    $('#testNMJv2').click(function () {
        var nmjv2_host = $.trim($('#nmjv2_host').val());
        if (!nmjv2_host) {
            $('#testNMJv2-result').html('Please fill out the necessary fields above.');
			$('#nmjv2_host').addClass('warning');
            return;
        }
		$('#nmjv2_host').removeClass('warning');
        $(this).prop('disabled', true);
        $('#testNMJv2-result').html(loading);
        $.get(sbRoot + '/home/testNMJv2', {'host': nmjv2_host})
            .done(function (data) {
                $('#testNMJv2-result').html(data);
                $('#testNMJv2').prop('disabled', false);
            });
    });
	
    $('#testTrakt').click(function () {
        var trakt_api = $.trim($('#trakt_api').val());
        var trakt_username = $.trim($('#trakt_username').val());
        var trakt_password = $.trim($('#trakt_password').val());
        if (!trakt_api || !trakt_username || !trakt_password) {
            $('#testTrakt-result').html('Please fill out the necessary fields above.');
			if (!trakt_api) {
				$('#trakt_api').addClass('warning');
			} else {
				$('#trakt_api').removeClass('warning');
			}
			if (!trakt_username) {
				$('#trakt_username').addClass('warning');
			} else {
				$('#trakt_username').removeClass('warning');
			}
			if (!trakt_password) {
				$('#trakt_password').addClass('warning');
			} else {
				$('#trakt_password').removeClass('warning');
			}
            return;
        }
		$('#trakt_api,#trakt_username,#trakt_password').removeClass('warning');
        $(this).prop('disabled', true);
        $('#testTrakt-result').html(loading);
        $.get(sbRoot + '/home/testTrakt', {'api': trakt_api, 'username': trakt_username, 'password': trakt_password})
            .done(function (data) {
                $('#testTrakt-result').html(data);
                $('#testTrakt').prop('disabled', false);
            });
    });

    $('#testEmail').click(function () {
        var status, host, port, tls, from, user, pwd, err, to;
        status = $('#testEmail-result');
        status.html(loading);
        host = $('#email_host').val();
        host = host.length > 0 ? host : null;
        port = $('#email_port').val();
        port = port.length > 0 ? port : null;
        tls = $('#email_tls').attr('checked') !== undefined ? 1 : 0;
        from = $('#email_from').val();
        from = from.length > 0 ? from : 'root@localhost';
        user = $('#email_user').val().trim();
        pwd = $('#email_password').val();
        err = '';
        if (host === null) {
            err += '<li style="color: red;">You must specify an SMTP hostname!</li>';
        }
        if (port === null) {
            err += '<li style="color: red;">You must specify an SMTP port!</li>';
        } else if (port.match(/^\d+$/) === null || parseInt(port, 10) > 65535) {
            err += '<li style="color: red;">SMTP port must be between 0 and 65535!</li>';
        }
        if (err.length > 0) {
            err = '<ol>' + err + '</ol>';
            status.html(err);
        } else {
            to = prompt('Enter an email address to send the test to:', null);
            if (to === null || to.length === 0 || to.match(/.*@.*/) === null) {
                status.html('<p style="color: red;">You must provide a recipient email address!</p>');
            } else {
                $.get(sbRoot + '/home/testEmail', {host: host, port: port, smtp_from: from, use_tls: tls, user: user, pwd: pwd, to: to},
                    function (msg) { $('#testEmail-result').html(msg); });
            }
        }
    });

    $('#testNMA').click(function () {
        var nma_api = $.trim($('#nma_api').val());
        var nma_priority = $('#nma_priority').val();
        if (!nma_api) {
            $('#testNMA-result').html('Please fill out the necessary fields above.');
			$('#nma_api').addClass('warning');
            return;
        }
		$('#nma_api').removeClass('warning');
        $(this).prop('disabled', true);
        $('#testNMA-result').html(loading);
        $.get(sbRoot + '/home/testNMA', {'nma_api': nma_api, 'nma_priority': nma_priority})
            .done(function (data) {
                $('#testNMA-result').html(data);
                $('#testNMA').prop('disabled', false);
            });
    });

    $('#testPushalot').click(function () {
        var pushalot_authorizationtoken = $.trim($('#pushalot_authorizationtoken').val());
        if (!pushalot_authorizationtoken) {
            $('#testPushalot-result').html('Please fill out the necessary fields above.');
			$('#pushalot_authorizationtoken').addClass('warning');
            return;
        }
		$('#pushalot_authorizationtoken').removeClass('warning');
        $(this).prop('disabled', true);
        $('#testPushalot-result').html(loading);
        $.get(sbRoot + '/home/testPushalot', {'authorizationToken': pushalot_authorizationtoken})
            .done(function (data) {
                $('#testPushalot-result').html(data);
                $('#testPushalot').prop('disabled', false);
            });
    });

	$('#testPushbullet').click(function () {
        var pushbullet_api = $.trim($('#pushbullet_api').val());
        if (!pushbullet_api) {
            $('#testPushbullet-result').html('Please fill out the necessary fields above.');
			$('#pushbullet_api').addClass('warning');
            return;
        }
		$('#pushbullet_api').removeClass('warning');
        $(this).prop('disabled', true);
        $('#testPushbullet-result').html(loading);
        $.get(sbRoot + '/home/testPushbullet', {'api': pushbullet_api})
            .done(function (data) {
                $('#testPushbullet-result').html(data);
                $('#testPushbullet').prop('disabled', false);
            });
    });

    function get_pushbullet_devices(msg){

        if(msg){
            $('#testPushbullet-result').html(loading);
        }
        
        var pushbullet_api = $("#pushbullet_api").val();

        if(!pushbullet_api) {
            $('#testPushbullet-result').html("You didn't supply a Pushbullet api key");
            $("#pushbullet_api").focus();
            return false;
        }

        var current_pushbullet_device = $("#pushbullet_device").val();
        $.get(sbRoot + "/home/getPushbulletDevices", {'api': pushbullet_api},
            function (data) {
                var devices = jQuery.parseJSON(data).devices;
                $("#pushbullet_device_list").html('');
                for (var i = 0; i < devices.length; i++) {
                    if(devices[i].active == true) {
                        if(current_pushbullet_device == devices[i].iden) {
                            $("#pushbullet_device_list").append('<option value="'+devices[i].iden+'" selected>' + devices[i].nickname + '</option>')
                        } else {
                            $("#pushbullet_device_list").append('<option value="'+devices[i].iden+'">' + devices[i].nickname + '</option>')
                        }
                    }
                }
                if(msg) {
                    $('#testPushbullet-result').html(msg);
                }
            }
        );

        $("#pushbullet_device_list").change(function(){
            $("#pushbullet_device").val($("#pushbullet_device_list").val());
            $('#testPushbullet-result').html("Don't forget to save your new pushbullet settings.");
        });
    };

    $('#getPushbulletDevices').click(function(){
        get_pushbullet_devices("Device list updated. Please choose a device to push to.");
    });
    
    // we have to call this function on dom ready to create the devices select
    get_pushbullet_devices();

    $('#email_show').change(function () {
        var key = parseInt($('#email_show').val(), 10);
        $('#email_show_list').val(key >= 0 ? notify_data[key.toString()].list : '');
	});

    // Update the internal data struct anytime settings are saved to the server
    $('#email_show').bind('notify', function () { load_show_notify_lists(); });

    function load_show_notify_lists() {
        $.get(sbRoot + "/home/loadShowNotifyLists", function (data) {
            var list, html, s;
            list = $.parseJSON(data);
            notify_data = list;
            if (list._size === 0) {
                return;
            }
            html = '<option value="-1">-- Select --</option>';
            for (s in list) {
                if (s.charAt(0) !== '_') {
                    html += '<option value="' + list[s].id + '">' + $('<div/>').text(list[s].name).html() + '</option>';
                }
            }
            $('#email_show').html(html);
            $('#email_show_list').val('');
        });
    }
    // Load the per show notify lists everytime this page is loaded
    load_show_notify_lists();

    // show instructions for plex when enabled
    $('#use_plex').click(function() {
        if ( $(this).is(':checked') ) {
            $('.plexinfo').removeClass('hide');
        } else {
            $('.plexinfo').addClass('hide');
        }
    });

});
