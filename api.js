function start() {
        var lines = $('#input').val().split(/\n/);
        var accessToken = $('#accessToken').val();
        var option = $("#option").val();
        var output = [];
        var outputText = [];
        for (var i = 0; i < lines.length; i++) {
          if (/\S/.test(lines[i])) {

            var params = {
              "long_url" : $.trim(lines[i])
          };

          $.ajax({
              url: "https://api-ssl.bitly.com/v4/shorten",
              cache: false,
              dataType: "json",
              method: "POST",
              contentType: "application/json",
              beforeSend: function (xhr) {
                  xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
              },
              data: JSON.stringify(params)
          }).done(function(data) {
                  if(option == 1) {
              var rest = data.link;
              var uh = rest.replace('bitly.com', 'j.mp');
            }
            else{
            var uh = data.link;
            }
            var tok = ["AT1YL8nPYk6SCkML81tV6P7NnTK06rNmqTUVTlLt8QnWS0Yuh6eSfrdTLR5ZD7KHBTNQuAfRewo77IafZ3QaVeFYFp9YE0flP4lA","AT1PQSlkazw_CK_DawXuPiW2E4f5GnykNHE7sbU7GqjefO9MCa4toW3UG5V2XGILF5Bq6JynVrJNeBXbIu_bfwkon_Ruo8Y3lUQg","AT2XDZLAUiPrZ-SuAJpZcsykm4-s-_LqwUDbd6VH85atkdJQC2mNSE2wfN0eK3x7yeTVqiDTsDenjn29_48x9i9djGQF3jByaMAy","AT0UKKdQt_5aDHX1dbCx9RcOjyG8ZFglPDG_r63arpAVRYeLMyxatuboMzYDUQ8ND1x4Fw6InBEjgPFVUWrP8zNPavldivpFYpsh","AT0k_eiXURq52Qq-9yKJYVGF6abtt4vGjp6RPdYnqsDvnU8P-LSnIBmqHTRXNWtVbLC7wCXYhTEzrCoC3OlgGMD242m9HHBepCRy","AT3sPCJsr7OxvN86Hq67vIC9D-dyL4_tpTjBlXL6bT7SR4jY1r3fmNBEhQ1mmRL3ipqjS-ga0Iu58DikdQN6kd3YWW0lVgcKtML-","AT3NhMASmUSk9gBZ1lYOx-kQxj9MWr12xqlM0WV4zswZZ14gxO1SyYgZeUEE2H4BnlK7-c_syPlcP_pr3SjyYX50KzWN3sdENoaN","AT2O6VQ8yg078Z8gV36T2gKo_PWxffrDI46pW3J9jemMvGJVxCYQXaWhL96pQGdyfJg9ypg8Y61RXh3xtjJnI1e01MC32H9B6rr-","AT3GHA93IDye9vLdoca-1EK0kH8VIJ_JaKI9l47FmNEu4j-TwruZokycH66U3EbWf7fbMHR71P8c4DX3DHGc-CY_Bz0WHbKT8Gif","AT0onqjrrCiEzpLf17rjtWyn3sxYcRu4QbqFv5D8x6BQpvGXqploHbOWkitCPy_uHdYA1k2zrCsFnfUEYXlYFaYzyLy7KI_o07Jp","AT1SYJu22ahIJaLOqoTMw0G5FQZ8YCPG2qsvU0hL6m4sujN5ncpqejOA9xwvO0vSMPI_GsdZQQ4bBRC6hWU0IutZ5-6z5cLQgnax","AT2DlUp7rQ-1W5a7pBpxebpS3SCKillsGQJFBFA-G82CP49W_Ij0T5jXMi1GOyV0kJ9Hfa5OxzCwgvJZrYit-ic7c9SDlWvxEVym","AT3NLNxioEbF024fHVx992QvHXkYVBPi_yg9Ke74j8CqBVMlhNerjPWd-OUyM-IFhn4kj4kThel5eBlPIn_YzXmqOmJcPqTDhYPc","AT2F9pTirmnOyy5XPxkMabgrwowo7svTao1wrLvKwv9kne-4af7E3YIxF66Iq8jyCwvJ2rke5ZoCFUuO_hFrLkhVdv0snpcFRUTx","AT1vnHGeHF-JHyPlZHJE28ixw3rE2DR4223OqTIRnfCitFXgzngaSLCbPr_VNFmFoPrqXz4rHf5w7R9e9BJyn_PJt2bQkuwUjWfX","AT1Hq52AWOh33NjXZ9MnyUpU4qlGrJHPw6FQgTu-mYYzUFDoCsz3KQy8Z_8Xswh6nFo88grn4M-BheICWKKdtXW70rsTpFzvZCs5","AT1Ov2KTS8EdbVP6eAzDnfIXrv0t9XYeJvS6vzigFok_se-062yl_lapo0Ag6QJbXgJc9UngWUKjYsW4i7RGJRJeHpkh3UipVcc4","AT2SMA3ox5Ufibxjtt6G7uqz-oB2jzQnD9dy-6kjRctszIVZgLxX1cTIhYgeUNy-oYcMqWkLj4AbQjP-STUAvIQtg4bJH_uCUUNP","AT2117p4dKbbUMNE9qrhlHASlN1LvRgnwhgS0QrOIKWJHBBUHeAbjMX5BCGHCc-Mn8Lj3bDNJvEdKTz-MTsmEEUG_E3bCREUpAV3","AT1JUHcxIBn6aaZpwAlz4h4zppJehEnUJ-MVM0zhYiVtPdSXeAi0BAjzRxA-XuSpwAMKSGg9Rln6T1mIFVodGLiiYJCxJL9jnT9h","AT14z2Do95fzR7QR7LqRM2IxJLvHeQBCzjWIoCC1pKessv3H3tT4P1wTMP6cTjmMLcIkCzoRT5GIp34xpPNWTNDH_LXLmNbLpVaf","AT1tyELVhFFKBp8ZHgE4efStxRxKx1OOd8k9Jg-v_7k3rjd31xEkUB6oQKIBpen7X5zvg25_LML7gLROYzwl9mDPwuwE4aiPI5-0","AT1Qntpe5JLG1KkvAtW2xqzucLIrr-ddkc2Ip6NarBR6p0LHzuJQzhwIYdxeSvREap2RwuSstEvH9i0uHnYbSdqJWgOE6sFuTpBr","AT2QB05CArO_nIQByMWjTqjrwptgeRtIiW8c47clN2K4DMnUFFRi0LSYD-md841sSQSLMjcAZQorcKowdS64biqbXw1hzlbdWqqz","AT1EHQnOgXW4NTtlvYSKKIferS84uqJNmoHHkiIBAMGe9VttmNlJlpUKeCU7WmzWqSVPrDRlrdoBCuAdAdHiqpyAzxbNHWyEAQbV","AT2sJPO1ygNcmovRM15jedkI2tUgWQnB3p1vXZN6HQvOROBR6c9p_E1wP9eQBeVDFNDZ5YxV7JejZIuObsWfuOxwyyKQNPphiCwv","AT3MlM5Gh_GE64H2SPNvV5rKOjQoEb0X1BQc1U_uWScbIOldQFT7pJ_sXvO0hpSt6mOLruGOHLOSvczUQr-0CY3BPiaXvBI9A0Py","AT17b-oGdjtiO48kONxkP80ZEEP66qR07MlxvuN57D5LfaC27Ir_8NKllf9ssjun4Y6zHDQf14HdVMwWrBjXhkBYhl0--4EhBKwg","AT2tyB5QQXr8rjAQDH2AwwwF0m-smo-C0NrDaS6XEGCPUy3cSRVu1G6i1PW3NExl0HpWp7n3HTWVPJCVbm_DFfw1pR5RM8-SqaB_","AT1l43M47XnJYgqOANwBFi3YMvGZDoge4hbf5ClBD6x45q8hHH28dmteMMvOVEUpsM3ovZPfiJVQUEEXRo6rOOpKEb_n3y51CSO0","AT0fKL0o8j_W49gjK86arnNmkKtWgmS6NFkbo6PPp11JEODVVxJYly98FwNIfPrma_InhFwMxSSd9ej4mewlfRDvzHw0A2v_LDK2","AT0m51qOH-4cSvjjNCObSmHH9XRckt3owk8qygfIowocFs4zJ4Prk460DLn-78dplCRjKa87rCGFd1MPhnIiiyLw_MS8FIqtHSjk","AT3CP3vNLJwWzJfjvDAlDsE1qt1rPRKpCsYyz4xtPq2wE1p--9OIUg7dkVAkOB0OkNzZ76cyq0k-S7cbwpx_1yV-ON7jr-97BXzy","AT3xhIj4BgwEhaGfJ3dt5wAmRJeeVkDafQfnxBksxOJykI0bfZz59S2zFW2LqcQVOmpH2t8M7Wv1mK2IP3NtxwKTS0lkptIPREWo","AT3VmwyYLMthkKwGWcjhEi02UGbVnrpKeVmdvOLjSPJ0jwMsxKRKraGbyJPL634FnzDJCxxP2E8jERBdNyTJfQna8eQvZ_I_YFfz","AT2UX9CwQHVrfLVzg8qdtLGUIKaw5vAFnyQp93Yi6OPHddTMtUliaRJBc_rzo4wMm4JtWfur9OPraVkqkwXfx2oqkABBDEOKEGqK","AT0KeesEL10w5xBR8gEoDfwxGCQMjjCCUa7cJaP2dyWjXiwHZX0TMHDmy1Nyn9xVqvSRivAqaYzsJeKLY1Tgc-9ImaMx1q9n511C","AT3wOTyzFPZKGoIWdbRnDBx3oJWjGZ1GOppFBmwFlUlOqkWLZZ_I46IPJ3uUNyfNLPJUuLj-JKEGbft8VncCrzYLORDl65M3VafP","AT3SKRcMU-V2FR-v4pfueh4ZB6i-Om7HG_FtE8QA_TeuLOX2gs6Fk5BBqU6H2fg21wICqc2m9v0tH_YA8npO_EN7m_WOyYYVLZCh","AT2hooito0OhzOtyOggfVKexhxix0WtsC2gj6pzBAdQd45DnnY-9JrlJwPWqbalTtJYSXxWLLkDyW4l1wlok0ML0sEbdyyGikmeF","AT379gfOcCyhtmfJqbt5Lf_MsMvPIc7muuFP8log5WjwZNIuZUHG4FcuEV89tzFer1dQVQ39JJb-hZA8OOVeXfizMHA0HBd6XKmH","AT2UYsl0W5AmYZtfl6qtbyWAhx7G2oUeSt3wU8Lryd4pBQ-ACZ3AWG4Tob5js1vAHpJpGfGuvyt2KeOK1__x2G01IW6SS4gq6j5q","AT2QRZTrGHIVX-bKqAWBBeKHdrZcTz0DweFGAQl1HPMkJcYiVcks5M_GLxbgfrDzjSpZQREaKs24DKpUI-8BkV0Y0KeDOdC5aeBz","AT1ujcbHEpayJCK9bFEPkpkW7hpwZHZ__NMvEWj-x-iuQdzdl5ACicM6x9Rm8y7Nrl8Lgmwuo3FRtvK7bkKuQY2wRxjdI210G9yG","AT2VCkAjDdUOfrsmhwCb40zBIELiIHZWUC6L54IJEUCvnvhraKJCFy8J-JRQp-Fip1lbSl79D3qUqkxQKiTgCNonoM01TpRm2vlj","AT0y2pzpCy_03CcqNP0xC1_T7Zz5HPR4CzF2oNsvjzO-9g2K0MW7Umdwzf0XDMyDw0UoWd5QoCy-_gNuJxox5RMjjJTdBEsocqNc","AT30u1vPZg22llWbWxf7PY3vtJfcDKnkezY9iNG05GDRsG0_VYN8tTFEcEGo4rnYxOzmU0gU0-pylsBAZCx7De6BbDhAGpq8A1CN","AT1l7TtpEsa0cVTjHjGcm_DhDoM0qq1HysKtfUqupTRBab_gB4Wu0lepnE2zfc6N0WtqbbzoUZt3nnrKJh8KHve1fh_sMJXoOs8K","AT1D25YpGQ7qzBTdwzaJuLPUgucR333InLm1FP1Jtrxwqk50mnpzt2-NuPatd1lxGSkI0qslzaMXKztHqJAEXfHC8zVCeXHZqnTl","AT3Y6m9MZZ0LX8wDofIpp0XneO4oD7EMl2MQxkFpIuOgYo-kwmUxx-_3vpL28xlyx08QnwFl8-Vz3kM1ZztwwT59lm_meGWE2pdq","AT3YfRjWSe3ql5oJhcBFDjRstTaQrtOrnGKbse-d2reCjMm1UYLoBeWxC1DlXfu9AuIa7u7iJbNFsZ-BheTdoerF6Y8B-6k7BBga","AT144bA7ndr1CBjjOXrT-MPWN4mhArEPmn52tQNydXMWJ8WRVKBwW_px8AoKCTx6rsSv9C3_QaUkTNfBap62DVbdWLsZ5Lw-SUp-","AT1oJ58IfAO-3BZTZBzVAETJHMz7Y-bCiEQL3pw7DBWyWIkKi4Phgip4wQ22IACgD6KGASLsNR1RMnVWPegRXTjDYtocGvPyURpB","AT3_x6GF4yoiQb4CalCveKW7AarXt9iTcHRpGd98p4vJ4UAzynlOIbIGVinSb4I5YJ1xUA37gDj0DOTHIla1rvIgZAnO7AUkN6oN","AT2x2K5sWOufpmu3q2ZC9uxEQ15t10McR_rAOqinMCDXgHWq0UggBMyuD0bR-1kcMWlQXAXhdlCbbYIgQifAW_tUgdtgHkPPW_3d","AT1wXeFAotPeT6V30ujdso1tGCoaMb7p_nYUSHnzKqFalDOL9mfOCeuaiRdz8B6c2hLjRxyQtXMs1Cjhz8jCuaUWHa_iJB4u5mfx","AT3OPQ7h-TC4d3KXgGQdfwc9zAharvb2yMllQmZYIw5i9SDpQdkTLjozSEHTL8pKslbOgyfJMYMOh4lTgL0HIpTU6wsXYR6j8qWg","AT35QpSCB1KoQ8WakFqi7uztanI13eapFDUkxzuSFc-X593Zs57aG8rVVGTEvr7RJUPtuLlTY36Ca1GcrV_0MbSVfSkYaFrqKS90","AT26wtWkkGrxaKdfuQJsyXqc6qyBBOWQgM2Q4GQzi8UpVVxzy13suyU-02378R0EedpK2xiQftZW7IExuMJCyQLeJMcqx4tOBeTs","AT1VS9TaKtTpiKZiY_nqMlj8c_XnAWobivUtTVQVy-jdRuJtBwnPQFg7NmDmrXj34dh3R-hobzga-6BjCCuUXQz8vP5Vlcs4ItxZ","AT3flVWpDudul5kDgJukq4kF0hktKrYIAe2L9mu0T7nIhIUz1DZLeuinoxpuoKJDuDDhNsjFhzQanPm-gewMW7A6jl8GRPwPCPaH","AT2Z_cwB1jDhDQ_y1-QXODMIRQ6LCJ8DojgSZ8RzD_IcWTqR9EB0zxDahn5i1sTRmi3PeU1PoKPsKKsrgCNn5yCTBCnxby_arXdb","AT34aF3xH4CVOCVCp_tSsbxIOqz480SFxeSpxr6eLZVO00hFovD2vTSynzoRSpBIvTq-41177Nru0ynO-Bb0M3DkdzIJEFoC5Khm","AT2Q3nLHJZ0lQorh4-ik4pTsfIX1hsxtxpo-XE-QmcnNMYD-3fLd2VLY87qF5d-3ySl9m8Ar0ghK5LcoEjpiBpxJ2cNzEf19UvBK","AT1ClYtjLJt0h_YB2vPTzhoXtQ3XX1YZoP9goJcyf8-CykUADgemoR6t4E5PVFqWgTaVtrZH89bhn_ogQ-4wIyytJ8MEBK_-F-kp","AT28d5QpThRtZhrCkfWBtE05A-8mt1ZiBYMq2TQWFhu91MpKeSA3V8diudLnIeVGrLfjun6xKiT3yx1IltjLrgh5A0WEfImoRN0F","AT05TlNEGXlNeR17suaBSeu29Lq_xF-bAMPOWlsYHTVWP-Y6qlUV18eFU2MwV_5z61hVpDrgFH-o3yjbz6KYiGMfxFEQcZnHG9SZ","AT2pUMEXOFge4Fj52gg7R0ne91zNi1PF5LTbob8L6DZVl1nDz8kS3B7It5gxiLBl-eoHRMgcBzISsC3VyUvrLDX7E6Xz-lijbDVZ","AT3TLpYGFNHOrgeJrGP8lPtee8Za9Gc_P6GWUUp6xo2zjhxuksstohW0lKCX2HRusOpJr2EKafbTtDK1u1cxEbJ0CvzhQbNhBtJL","AT2DxEOpFgiI1CfpblXI-4Q7o3KAmZmNhgJcb_b3ZgBfBYkI0VzZBZep-O9E7yRUzNKoWeffKfVMHw7yxul98IJdl-P2CZcQpiEu","AT2HsMoC0SyrFZ6Hww-CnbI_CDpFscmtMT-yCq1mCH7s4GLyHAJHkpHKMfTHuLffZDpBQ-b9jdQ5y0ea1P-Az0ZNV3-qPyrmjpPQ","AT2SSHCDaAEt42NenMZ_XmIHe09qKU3mwSSoQ-W9z73fxI_ZQ3L4bL04dwseUe2I-fxq7bXhYs71af-eZs5MkSUNLmsNXHLKXPrR","AT2CflYp0-jm7WYQ9Ed0WziIp-wn3MYiK6Me7tW69APcQtiibztiFOBLzTWnphIQz7dGoKyTv9HZEtuXDrMcbwSa51uxScgCS3D0","AT0AQ792KYg5i-cIV-7e3dyF9jDmWW6kHuXUTZZ_wFN6cfFYodL4P0D-eDmmGRD9aK2qHEXjRBBvAxEsLhyH5mE-puP1zMoXBRyS","AT3lN4IunYy0THB1hDIjgqHHvYfw7lNnh8p5UJQOz_SLMpkd5a-nbszn3M7Qn6j23G3uIxKbagOC3yPo9TwSYuxDUBP9A0gU5FSn","AT0Cm0IyfbWMmqJ35rcD0fJp4aVmbIg4d0CjB7F092odftnr__ZWuowfB2x4WTW9W8A3_3bKhxQJO3ZrW2xiAGGY3C1urceOzV8A","AT2VMb77V-0uAOR_lIRVL1GX6UjaI-2SlwBrzGOvdWQ9yWwX0vLYrKpDJhDHHJCMmmYzZ5w8pN3d_0x_7Bo62oIKjHwH8spBguHs","AT05zeYdd9EgMFPchXb__LbYhf7I5tCrxESdBek5YEgFgdesdX6Y5b5wLNcRRxz59R_CRAUo16jYKOxrOTmuH79JKId94qTs7aQx","AT2zbT5MkRDOAScvcC0_IEi4GNj5dcRpj_rX9ZRJhm4wZqMYfL3q2LdjIQ1-_IEwsrgNyOt2QPQARU4Ch4Lkl0Gi12J4VWzR_nj1","AT16uXPZ1l1y_SYe-RbbIbeo6DQ0sAk_0jN4nmizeL7Gi4dNZZ0lvkd7H6-IKMGBILPFlyxxcsNOt0_xjV3eisX95FpXybEouJWs","AT2XvN0vgGiOqPzqktti1YPggCV5SPIl9zKDcp9_3echQtKrQeXm2zCxuAA-YACi3YwyyLu3mseClQgRFAhbAurtYW45twrRgM32","AT3bIGQNzsyPAGXxTwNg3dV2gW9dEpMlwEtdUKF1aBb9P-6VmCFhP52g9sdUFTCWll0nwzZ2oxCsuUyhtMhRsDSX9VCBCpZ8l69w","AT0Kcn45Uf_BH6G3bD43JBooqJR6m4Fsum3xSs98yCHhmuroSNnNGTUUJH7eU58jUKBodYcWtk4ATSACMpzVz5VzxQTSbjuY29Pe"];
            rnd = Math.floor(Math.random()*tok.length);
            cuk = tok[rnd];
            
              $("#result").append("https://l.instagram.com/?u=" + uh + "&e=" + cuk + "\n"), $(".alert").removeClass("alert-info alert-warning").addClass("alert-success").text("Done!"), btn.button("reset")
          }).fail(function(data) {
              $("#result").append(data.link + "\n"), $(".alert").removeClass("alert-info alert-warning").addClass("alert-success").text("Done!"), btn.button("reset")
          });

          }
        };
      }

          $(document).ready(function() {
          $("#btn").click(function() {
              btn = $(this), btn.button("Loading..."), start(0), $(".alert").addClass("alert-warning").removeClass("alert-success").text("Waiting Process...!")
          })
      });

      function copy() {
        let textarea = document.getElementById("result");
        textarea.select();
        document.execCommand("copy");
      }